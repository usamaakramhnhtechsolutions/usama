import React from "react";
import { useState } from "react";
import { useHistory, useParams } from "react-router";
import Swal from "sweetalert2";
import BaseUrl from "../BaseURL/BaseUrl";
import Content from "../layout/content/Content";
import Head from "../layout/head/Head";
import Layout from "../layout/Index";
import axios from "axios";
import "../pages/pages.css";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));
const EditSumAdmin = () => {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  // const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);

  const handleClose = () => {
    setLoader(false);
  };

  const history = useHistory();
  const { id } = useParams();
  console.log(id,'id')
  const token = localStorage.getItem("accesstoken");

  const editData = () => {
    setLoader(true);
    var config = {
      method: "get",
      url: `${BaseUrl.baseurl}subadmin/edit/${id}`,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    axios(config)
      .then((response) => {
        setLoader(false);
        console.log(response);
        const { name, email, phone_no } = response?.data?.data;
        setEmail(email);
        setName(name);
        setPhone(phone_no);
      })
      .catch((error) => {
        setLoader(false);
        console.log(error);
      });
  };

  useEffect(() => {
    editData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addapi = () => {
    setLoader(true);
    try {
      const data = new FormData();
      data.append("name", name);
      data.append("email", email);
      data.append("phone_no", phone);

      var config = {
        method: "POST",
        url: `${BaseUrl.baseurl}subadmin/update/${id}`,
        data: data,
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      axios(config)
        .then(function (response) {
          console.log(response, "api");
          if (response.data.status === true) {
            setLoader(false);
            Swal.fire({
              title: "Good job! ",
              text: "Sub Admin Update Success",
              icon: "success",
              button: "Ok",
            });
            history.push("/subAdmin/dashbaord");
          } else {
            setLoader(false);
          }
        })
        .catch((errors) => {
          setLoader(false);
        });
    } catch (errors) {
      setLoader(false);
      console.log(errors, "error");
      Swal.fire({
        title: "Something Went Wrong",
        text: errors.errors ? errors.errors[0] : "check your Details",
        icon: "error",
        dangerMode: true,
      });
    }
  };
  return (
    <>
      <Layout>
        <Head title="Add Sub-Admin" />
        <Content>
          {loader === true ? (
            <Backdrop className={classes.backdrop} open={loader} onClick={handleClose}>
              <CircularProgress color="red" />
            </Backdrop>
          ) : null}
          <div className="container-fluid card rounded boxsh py-3">
            <div className="row justify-content-center p-3">
              <div className="col-md-6 boxsh ">
                <div className="card  px-2 py-4 rounded-4">
                  <h3 className="text-danger text-center py-2 ">Update SUB-ADMIN</h3>
                  <div className="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Name"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                    />
                  </div>
                  <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Phone Number"
                      onChange={(e) => setPhone(e.target.value)}
                      value={phone}
                    />
                  </div>
                  <button
                    className="btn btn-danger w-50 mx-auto d-block d-flex justify-content-center align-items-center"
                    onClick={addapi}
                  >
                    Update &nbsp;&nbsp;
                    {loader === true ? (
                      <CircularProgress style={{ height: "20px", width: "20px", color: "white" }} />
                    ) : null}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Content>
      </Layout>
    </>
  );
};

export default EditSumAdmin;

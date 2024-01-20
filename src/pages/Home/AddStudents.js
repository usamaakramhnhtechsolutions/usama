import React from "react";
import Content from "../layout/content/Content";
import Head from "../layout/head/Head";
import Layout from "../layout/Index";
import "../pages/pages.css";
import { useState } from "react";
import { useHistory } from "react-router";
import Swal from "sweetalert2";
import BaseUrl from "../BaseURL/BaseUrl";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";

const AddStudents = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState('');

  const history = useHistory();
  const token = localStorage.getItem("accesstoken");
  const addapi = () => {
    setLoader(true);
      const data = new FormData();
      data.append("user_name", name);
      data.append("email", email);
      data.append("phone_no", phone);
      data.append("password", password);

      var config = {
        method: "POST",
        url: `${BaseUrl.baseurl}student/store`,
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
              text: "student Added Success",
              icon: "success",
              button: "Ok",
            });
            history.push("/students");
          } else {
            setLoader(false);
          }
        })
        .catch(function (errors) {
          setError(errors?.response?.data?.errors)
          setLoader(false);
        });
  };
  console.log(error,"student")

  return (
    <Layout>
      <Head title="Add Students" />
      <Content>
        <div className="container-fluid card rounded boxsh py-3">
          <div className="row justify-content-center p-3">
            <div className="col-md-6 boxsh ">
              <div className="card  px-2 py-4 rounded-4">
                <h3 className="text-danger text-center py-2 ">ADD Students</h3>
                <div className="form-group">
                  <label for="exampleInputEmail1">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Name"
                    onChange={(e) => setName(e.target.value)}
                  />
                  <p className="text-danger">{error?.user_name}</p>
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
                  />
                  <p className="text-danger">{error?.email}</p>
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <p className="text-danger">{error?.password}</p>
                </div>
                <div className="form-group">
                  <label for="Phone Number">Phone Number</label>
                    type="tel"
                  <input
                    className="form-control"
                    placeholder="Phone Number"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <p className="text-danger">{error?.phone_no}</p>
                </div>
                <button
                  className="btn btn-danger w-50 mx-auto d-block d-flex justify-content-center align-items-center"
                  onClick={addapi}
                >
                  Add &nbsp;&nbsp;
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
  );
};

export default AddStudents;

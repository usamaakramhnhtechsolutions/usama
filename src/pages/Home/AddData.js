import axios from "axios";
import React, { useEffect, useState } from "react";
// import { Base_Api } from "../config/axios";
import { useNavigate, useParams } from "react-router-dom";
import { Base_Api } from "../../component/baseUrl/BaseUrl";

const AddData = () => {
  const token = localStorage.getItem("accessToken");
  const navigate = useNavigate();
  const { id } = useParams();

  const [inputData, setInputData] = useState({
    fname: "",
    lname: "",
    contact: "",
    dob: "",
    address: "",
  });

  useEffect(() => {
    // Fetch data for the specified ID when component mounts
    const fetchData = async () => {
      try {
        const response = await axios.get(`${Base_Api}crud/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = response.data; // assuming your API returns data in a specific format
        setInputData({
          fname: data.first_name,
          lname: data.last_name,
          contact: data.contact_no,
          dob: data.Dob,
          address: data.Address,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the fetchData function
  }, [id, token]);

  const handleEdit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("first_name", inputData.fname);
      formData.append("last_name", inputData.lname);
      formData.append("contact_no", inputData.contact);
      formData.append("Dob", inputData.dob);
      formData.append("Contact", inputData.contact);
      formData.append("Address", inputData.address);

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.put(`${Base_Api}crud/${id}`, formData, config);

      if (response.status) {
        navigate("/table");
      } else {
        // Handle error
      }
    } catch (error) {
      console.error("Error editing data:", error);
    }
  };

  return (
    <>
      <form class="max-w-sm mx-auto my-20" onSubmit={handleEdit}>
        <div class="my-1">
          <label
            for="fname"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            First Name
          </label>
          <input
            type="text"
            id="fname"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="First Name"
            value={inputData.fname}
            onChange={(e) =>
              setInputData({ ...inputData, fname: e.target.value })
            }
            required
          />
        </div>
        <div class="my-1">
          <label
            for="lname"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lname"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Last Name"
            value={inputData.lname}
            onChange={(e) =>
              setInputData({ ...inputData, lname: e.target.value })
            }
            required
          />
        </div>
        <div class="my-1">
          <label
            for="contact"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Contact no.
          </label>
          <input
            type="number"
            id="contact"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Contact no."
            value={inputData.contact}
            onChange={(e) =>
              setInputData({ ...inputData, contact: e.target.value })
            }
            required
          />
        </div>
        <div class="my-1">
          <label
            for="dob"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Dob
          </label>
          <input
            type="number"
            id="dob"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Dob"
            value={inputData.dob}
            onChange={(e) =>
              setInputData({ ...inputData, dob: e.target.value })
            }
            required
          />
        </div>
        <div class="my-1">
          <label
            for="address"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Address
          </label>
          <input
            type="text"
            id="address"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Address"
            value={inputData.address}
            onChange={(e) =>
              setInputData({ ...inputData, address: e.target.value })
            }
            required
          />
        </div>
        {/* <div class="flex items-start mb-5">
          <div class="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              required
            />
          </div>
          <label
            for="remember"
            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Remember me
          </label>
        </div> */}
        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default AddData;

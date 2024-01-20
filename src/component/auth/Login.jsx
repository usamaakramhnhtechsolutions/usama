import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const Login = () => {
  const userSchema = Yup.object().shape({
    username: Yup.string().required('Please fill in your username'),
    password: Yup.string().required('Please fill in your password'),
  });

  const navigate = useNavigate();

  const { values, errors, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        username: "",
        password: "",
      },
      validationSchema: userSchema,
      onSubmit: async (values) => {
        try {
          // Adjust the axios request for login
          const response = await axios.post('http://curdapi.pythonanywhere.com/api/login', values);

          // Assuming the server returns a token upon successful login
          const token = response.data.token;

          // Handle storing the token or user data in your context or state
          // For example, you might want to use setUser or dispatch an action

          // After successful login, you can redirect the user to the home page
          // navigate('/');
          if (response.status === 200) {
            localStorage.setItem("accessToken", token); // Fix: use 'token' instead of 'access'
            navigate("/table");
          } else {
            // Handle other status codes if needed
          }
        } catch (error) {
          const { detail } = error?.response?.data;
          console.log(detail, "responseSignup");
          console.error('Login failed:', error);
          // Handle login failure, e.g., display an error message to the user
        }
      },
    });
  return (
    <>
      <form className="max-w-sm mx-auto mt-32" onSubmit={handleSubmit}>
    <h1 className="text-4xl font-bold text-blue-800 text-center py-4">Sign in</h1>

    <label
          htmlFor="email-address-icon"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          username
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 16"
            >
              <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
              <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
            </svg>
          </div>
          <input
            type="text"
            name="username"
            id="email-address-icon"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="username@flowbite.com"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.username}
          />
        </div>
          <span className="text-sm text-red-600">{errors ? errors.email : null}</span>

        <label
          htmlFor="email-address-icon"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your Email
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 16"
            >
              <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
              <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
            </svg>
          </div>
          <input
            type="text"
            name="email"
            id="email-address-icon"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
        </div>
          <span className="text-sm text-red-600">{errors ? errors.email : null}</span>
         
        <label
          htmlFor="website-admin"
          className="block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Password
        </label>
        <div className="flex">
          <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
            </svg>
          </span>
          <input
            type="text"
            id="website-admin"
            name="password"
            className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
        </div>
        <span className="text-sm text-red-600">{errors ? errors.password : null}</span>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 mt-5 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Login in
        </button>
        <p onClick={() => navigate('/signup')} className="text-sm py-1 cursor-pointer underline text-blue-700 font-medium">Create Your Account?</p>
      </form>
    </>
  );
};

export default Login;

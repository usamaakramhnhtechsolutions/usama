import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./component/auth/Login";
import Layout from "./component/layout/Layout";
import Signup from "./component/auth/Signup";
import Editcrud from "./pages/Home/Editcrud";
import AddData from "./pages/Home/AddData";
import PrivateRoute from "./component/auth/PrivateRoute.js/PrivateRoute";
import Table from "./table/Table";

// import User from "./pages/User";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/table"  element={<PrivateRoute><Table /></PrivateRoute>}/>
          <Route path="/table/editcrud/:id"  element={<PrivateRoute><Editcrud /></PrivateRoute>}/>
          <Route path="addcrud"  element={<PrivateRoute><AddData /></PrivateRoute>}/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

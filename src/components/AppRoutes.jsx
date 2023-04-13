import React from "react";
import { BrowseRouter, Routes, Route } from "react-router-dom";
// import Dashboard from "../../Pages/Dashboard";
import Dashboard from "../Pages/Dashboard";
import History from "../Pages/History";
import Settings from "../Pages/Settings";
import Users from "../Pages/Users";
import Assets from "../Pages/Assets";
import Files from "../Pages/Files";
import Products from "../Pages/Products";
import Splits from "../Pages/Splits";
import Artistes from "../Pages/Artistes";
import Accounting from "../Pages/Accounting";
import Addnew from "../Pages/Addnew";
import Register from "../auth/Register";
import Login from "../auth/Login";
import SingleUser from "../Pages/SingleUser";
import LockedBalance from "../Pages/LockedBalance";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="/history" element={<History />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/users" element={<Users />} />
      <Route path="/Files" element={<Files />} />
      <Route path="/Products" element={<Products />} />
      <Route path="/Splits" element={<Splits />} />
      <Route path="/Artistes" element={<Artistes />} />
      <Route path="/Accounting" element={<Accounting />} />
      <Route path="/assets" element={<Assets />} />
      <Route path="/addnew" element={<Addnew />} />
      <Route path="/singleuser" element={<SingleUser />} />
      <Route path="/locked" element={<LockedBalance />} />
    </Routes>
  );
}

export default AppRoutes;

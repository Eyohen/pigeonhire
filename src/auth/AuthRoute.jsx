import React from "react";
import { BrowseRouter, Routes, Route } from "react-router-dom";
import Register from "../auth/Register";
import Login from "../auth/Login";

function AuthRoute() {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default AuthRoute;

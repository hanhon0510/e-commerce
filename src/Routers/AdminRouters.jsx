import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "../Admin/Admin";
import ProtectedRouters from "./ProtectedRouters";

const AdminRouters = () => {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<Admin />} />
      </Routes>
    </div>
  );
};

export default AdminRouters;

import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../State/Auth/Action";

const ProtectedRouters = ({ redirectPath = "/" }) => {
  const auth = useSelector((store) => store.auth);
  const jwt = localStorage.getItem("jwt");
  const dispatch = useDispatch();
  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt, auth.jwt]);

  return auth.user?.role !== "admin" ? (
    <Navigate to={redirectPath} replace />
  ) : (
    <Outlet />
  );
};

export default ProtectedRouters;

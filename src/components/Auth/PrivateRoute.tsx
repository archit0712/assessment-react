import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = () => {
  const auth = null;

  return auth ? <Outlet /> : <Navigate to="/login" />;
};

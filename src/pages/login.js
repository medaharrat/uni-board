import React from "react";
import Login from "../components/Login";
import { NoSsr } from '@material-ui/core';
import { AuthProvider } from "../context";

const LoginPage = () => {

  return (
    <NoSsr>
      <AuthProvider>
        <Login />
      </AuthProvider>
    </NoSsr>
  )
}

export default LoginPage;
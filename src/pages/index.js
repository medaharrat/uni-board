import React from "react";
import { NoSsr } from '@material-ui/core';
import Board from "../components/Board";
import { AuthProvider } from "../context";

const Index = () => {

  return (
    <NoSsr>
        <AuthProvider>
            <Board />
        </AuthProvider>
    </NoSsr>
  )
}

export default Index;
import React from "react";
import { NoSsr } from '@material-ui/core';
import Board from "../components/Board";
import { AuthProvider, CoursesProvider } from "../context";

const Index = () => {

  return (
    <NoSsr>
      <AuthProvider>
        <CoursesProvider>
          <Board />
        </CoursesProvider>
      </AuthProvider>
    </NoSsr>
  )
}

export default Index;
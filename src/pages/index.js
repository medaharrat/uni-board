import React, { useContext } from "react";
import { NoSsr } from '@material-ui/core';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { routes } from "./routes";
import Board from "../components/Board";
import { AuthProvider } from "../context";

const Index = () => {

  return (
    <NoSsr>
    <AuthProvider>
      {/*<Router>
        <Routes>
          {routes.map((route) => (
            <Route path={route.path} element={route.element} />
          ))}
        </Routes>
          </Router>*/}

       <Board />
    </AuthProvider>
    </NoSsr>
  )
}

export default Index;
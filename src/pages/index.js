import React from "react";
import { NoSsr } from '@material-ui/core';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { routes } from "./routes";

const Index = () => {
  return (
    <NoSsr>
       <Router>
        <Routes>
          {routes.map((route) => (
            <Route path={route.path} element={route.element} />
          ))}
        </Routes>
      </Router>
    </NoSsr>
  )
}

export default Index;
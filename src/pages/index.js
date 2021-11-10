import React, { useContext } from "react";
import { NoSsr } from '@material-ui/core';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { routes } from "./routes";
import Board from "../components/Board";
import { GlobalProvider } from '../context/GlobalProvider';

const Index = () => {

  return (
    <NoSsr>
    <GlobalProvider>
      {/*<Router>
        <Routes>
          {routes.map((route) => (
            <Route path={route.path} element={route.element} />
          ))}
        </Routes>
          </Router>*/}

       <Board />
    </GlobalProvider>
    </NoSsr>
  )
}

export default Index;
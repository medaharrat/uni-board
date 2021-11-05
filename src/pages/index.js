import React from "react";
import { NoSsr } from '@material-ui/core';
import Board from "../components/Board";
import Login from "../components/Login";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Index = () => {
  return (
    <NoSsr>
       <Router>
        <Routes>
          <Route path="/" element={ <Board /> } />
          <Route path="/login" element={ <Login /> } />
        </Routes>
      </Router>
    </NoSsr>
  )
}

export default Index;
import React from "react";
import { NoSsr } from '@material-ui/core';
import Board from "../components/Board";
import Login from "../components/Login";
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
const Index = () => {
  return (
    <NoSsr>
       <BrowserRouter>
        <nav>
          <ul>
            <li><Link to="/Dashboard">AfterLogin(Dashboard)</Link></li>
            <li><Link to="/">Login</Link></li>
            
          </ul>
        </nav>
        
        <Switch>
          <Route path="/Dashboard">
            <Board />
          </Route>
          <Route path="/">
            <Login />
          </Route>
          
        </Switch>
      </BrowserRouter>
      
    </NoSsr>
  )
}

export default Index;

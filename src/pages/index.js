import React from "react";
import { NoSsr } from '@material-ui/core';
import Board from "../components/Board";
import Login from "../components/Login";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
const Index = () => {
  return (
    <NoSsr>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={Board}/>
        </Switch>
      </Router>
    </NoSsr>
  )
}

export default Index;

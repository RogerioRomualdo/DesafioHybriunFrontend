import './App.css';
import React from 'react';
import {Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';
import Login from './pages/login/login';
import List from './pages/list/list';
import Inspect from './pages/inspect/inspect';
import Add from './pages/add/add';

const App = (props) => {
  const token = localStorage.getItem('token');

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          {token ? <List /> : <Redirect to="/login" />}
        </Route>
        <Route path="/login" exact>
          <Login></Login>
        </Route>

        <Route path="/list" exact>
          {token ? <Inspect /> : <Redirect to="/login" />}
        </Route>

        <Route path="/inspect">{token ? <Inspect /> : <Redirect to="/login" />}</Route>

        <Route path="/add" exact>
          {token ? <Add /> : <Redirect to="/login" />}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;

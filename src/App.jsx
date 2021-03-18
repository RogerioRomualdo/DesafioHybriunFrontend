import "./App.css";
import React from "react";
import {Route, BrowserRouter as Router} from "react-router-dom";
import Login from "./pages/login/login";
import List from "./pages/list/list";
import Inspect from "./pages/inspect/inspect";
import Add from "./pages/add/add";

export default (props) => {
    return(
        <Router>
            <div className="App">
            </div>
            <Route path="/" exact component={Login}/>
            <Route path="/list" exact component={List}/>
            <Route path="/inspect" exact component={Inspect}/>
            <Route path="/add" exact component={Add}/>
        </Router>
    )
}


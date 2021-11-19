import React from "react";
import { Route, HashRouter as Router } from "react-router-dom";
import { Routes } from "react-router";

import Home from "../pages/home/";

import "./app.scss";

const App: React.FunctionComponent = (props) =>
{
    return <Router>
        <Routes>
            <Route path="/*" element={ <Home /> } />
        </Routes>
    </Router>;
};

export default App;
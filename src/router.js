import React from 'react';
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import {Route, Switch} from "react-router-dom";
import ToolContainer from "./components/ToolContainer";

const Router = () => {
    return (
        <div>
            <Switch>
                <Route path='/tool/:toolId'/>
            </Switch>
            <div>
                <Header/>
                <SideBar/>
                <ToolContainer/>
            </div>
        </div>
    )
};

export default Router;

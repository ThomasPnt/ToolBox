import React from 'react';
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import {Route, Switch} from "react-router-dom";
import ToolContainer from "./components/ToolContainer";
import Global from "./components/Global";

const Router = () => {
    return (
        <div>
            <Switch>
                <Route path='/' component={Global}>
                    <Route path='/tool/:toolId'/>
                </Route>
            </Switch>
        </div>
    )
};

export default Router;

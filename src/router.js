import React from 'react';
import {Route, Switch} from "react-router-dom";
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

import React, {Component} from 'react';
import {Provider} from "react-redux";
import ConfigStore from "./store/ConfigStore";
import {BrowserRouter} from "react-router-dom";
import Router from "./router";
import {renderRoutes} from 'react-router-config';
import {RouteDataLoader} from './components/route-data-loader';

const store = ConfigStore();

class App extends Component {
    render() {
        console.log(store.getState());
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <RouteDataLoader routes={Router} dispatch={store.dispatch}>
                        {renderRoutes(Router)}
                    </RouteDataLoader>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;

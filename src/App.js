import React, {Component} from 'react';
import {Provider} from "react-redux";
import ConfigStore from "./store/ConfigStore";
import {BrowserRouter} from "react-router-dom";
import Router from "./router";

const store = ConfigStore();

class App extends Component {
    render() {
        console.log(store.getState());
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Router/>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;

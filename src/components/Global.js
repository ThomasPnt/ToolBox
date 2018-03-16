import React from 'react';
import Header from "./Header";
import SideBar from "./SideBar";
import ToolContainer from "./ToolContainer";

export default class Global extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <SideBar/>
                <ToolContainer/>
            </div>
        )
    }
}
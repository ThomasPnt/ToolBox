import React from 'react';
import {connect} from "react-redux";

const ListTool = () => ({
    render() {
        return(

        )
    }
})

function mapStateToProps(state){
    return { Tool : state.ToolReducer }
}

export default connect(mapStateToProps, null)(ListTool)
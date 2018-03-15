import {applyMiddleware, combineReducers, createStore} from "redux";
import CategoryReducer from "../reducers/CategoryReducer";
import AddingCategory from "../reducers/AddingCategory";
import ToolReducer from '../reducers/ToolReducer';
import thunk from "redux-thunk";
import AddingTool from "../reducers/AddingTool";

const reducers = combineReducers({
    CategoryReducer,
    AddingCategory,
    ToolReducer,
    AddingTool
});

export default function ConfigStore() {
    return createStore(
        reducers,
        applyMiddleware(thunk)
    );
}
import {applyMiddleware, combineReducers, createStore} from "redux";
import CategoryReducer from "../reducers/CategoryReducer";
import AddingCategory from "../reducers/AddingCategory";
import ToolReducer from '../reducers/ToolReducer';
import thunk from "redux-thunk";
import AddingTool from "../reducers/AddingTool";
import ActualCategoryReducer from "../reducers/ActualCategoryReducer";
import SeeCodeReducer from "../reducers/SeeCodeReducer";

const reducers = combineReducers({
    CategoryReducer,
    AddingCategory,
    ToolReducer,
    AddingTool,
    ActualCategoryReducer,
    SeeCodeReducer
});

export default function ConfigStore() {
    return createStore(
        reducers,
        applyMiddleware(thunk)
    );
}
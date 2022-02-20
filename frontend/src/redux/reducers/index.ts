import { combineReducers } from 'redux';
import category from "./category";
import sideMenu from "./sideMenu";

const allReducer = combineReducers({
    category,
    sideMenu
});

export default allReducer;
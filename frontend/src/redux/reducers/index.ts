import { combineReducers } from 'redux';
import category from "./category";
import sideMenu from "./sideMenu";
import categoryList from "./categoryList";

const allReducer = combineReducers({
    category,
    sideMenu,
    categoryList
});

export default allReducer;
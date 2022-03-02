import { combineReducers } from 'redux';
import category from "./category";
import sideMenu from "./sideMenu";
import categoryList from "./categoryList";
import user from "./user";

const allReducer = combineReducers({
    category,
    sideMenu,
    categoryList,
    user
});

export default allReducer;
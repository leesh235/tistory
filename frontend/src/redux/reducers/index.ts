import { combineReducers } from 'redux';
import category from "./category";
import sideMenu from "./sideMenu";
import categoryList from "./categoryList";
import user from "./user";
import comment from "./comment";

const allReducer = combineReducers({
    category,
    sideMenu,
    categoryList,
    user,
    comment,
});

export default allReducer;
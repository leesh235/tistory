import { combineReducers } from 'redux';
import category from "./category";
import sideMenu from "./sideMenu";
import categoryList from "./categoryList";
import user from "./user";
import comment from "./comment";
import select from "./select";
import search from "./search";

const allReducer = combineReducers({
    category,
    sideMenu,
    categoryList,
    user,
    comment,
    select,
    search,
});

export default allReducer;
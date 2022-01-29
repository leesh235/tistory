import * as categoryAtion from "../actions/category";

const initState = {
    categoryId: null
}

const reducers = (state = initState, action) => {
    const { type, data } = action;
    switch(type){
        case categoryAtion.CATEGORY_ACTION_TYPE: {
            return {
                categoryId: data
            }
        }
        default: {
            return state;
        }
    }
};

export default reducers;
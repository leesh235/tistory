import { CATEGORY_ACTION_TYPE } from "../actions/category";

interface init {
    categoryId: number
}

interface Props {
    type?: any,
    data?: number
}

const initState : init = {
    categoryId: 1
}

const reducers = (state = initState, action: Props) => {
    const { type, data } = action;
    switch(type){
        case CATEGORY_ACTION_TYPE: {
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
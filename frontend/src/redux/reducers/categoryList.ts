import { CATEGORYLIST_ACTION_TYPE } from "../actions/categoryList";

interface init {
    categoryList: Array<{id: number, name: string}>
}

interface Props {
    type?: any,
    data?: number
}

const initState : init = {
    categoryList: []
}

const reducers = (state = initState, action: Props) => {
    const { type, data } = action;
    switch(type){
        case CATEGORYLIST_ACTION_TYPE: {
            return {
                categoryList: data
            }
        }
        default: {
            return state;
        }
    }
};

export default reducers;
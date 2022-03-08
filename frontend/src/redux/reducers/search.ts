import { SEARCH_ACTION_TYPE } from "../actions/search";

interface init {
    search: string
}

interface Props {
    type?: any,
    data?: number
}

const initState : init = {
    search: ""
}

const reducers = (state = initState, action: Props) => {
    const { type, data } = action;
    switch(type){
        case SEARCH_ACTION_TYPE: {
            return {
                search: data
            }
        }
        default: {
            return state;
        }
    }
};

export default reducers;
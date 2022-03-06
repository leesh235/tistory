import { COMMENT_ACTION_TYPE } from "../actions/comment";

interface init {
    comment: number
}

interface Props {
    type?: any,
    data?: number
}

const initState : init = {
    comment: -1
}

const reducers = (state = initState, action: Props) => {
    const { type, data } = action;
    switch(type){
        case COMMENT_ACTION_TYPE: {
            return {
                comment: data
            }
        }
        default: {
            return state;
        }
    }
};

export default reducers;
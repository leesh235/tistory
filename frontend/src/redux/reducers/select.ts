import { SELECT_ACTION_TYPE } from "../actions/select";

interface init {
    select: string
}

interface Props {
    type?: any,
    data?: number
}

const initState : init = {
    select: ""
}

const reducers = (state = initState, action: Props) => {
    const { type, data } = action;
    switch(type){
        case SELECT_ACTION_TYPE: {
            return {
                select: data
            }
        }
        default: {
            return state;
        }
    }
};

export default reducers;
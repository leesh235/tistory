import { SELECT_ACTION_TYPE } from "../actions/select";

interface init {
    select:{
        name: string,
        id: number,
    }
}

interface Props {
    type?: any,
    data?: number
}

const initState : init = {
    select: {
        name: "",
        id: -1
    }
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
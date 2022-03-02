import { USER_ACTION_TYPE } from "../actions/user";

interface Init {
    role: string,
}

const initState : Init = {
    role: "",
}

interface Props {
    type?: any,
    data?: Init
}

const reducers = (state = initState, action: Props) => {
    const { type, data } = action;
    switch(type){
        case USER_ACTION_TYPE: {
            return {
                role: data
            }
        }
        default: {
            return state;
        }
    }
};

export default reducers;
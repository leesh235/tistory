import * as userAtion from "../actions/user";

const initState = {
    user: ""
}

const reducers = (state = initState, action) => {
    const { type, data } = action;
    switch(type){
        case userAtion.USER_ACTION_TYPE: {
            return {
                user: data
            }
        }
        default: {
            return state;
        }
    }
};

export default reducers;
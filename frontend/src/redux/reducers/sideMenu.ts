import { SIDEMENU_ACTION_TYPE } from "../actions/sideMenu";

interface init {
    sideBar: boolean
}

interface Props {
    type?: any,
    data?: number
}

const initState : init = {
    sideBar: false
}

const reducers = (state = initState, action: Props) => {
    const { type, data } = action;
    switch(type){
        case SIDEMENU_ACTION_TYPE: {
            return {
                sideBar: data
            }
        }
        default: {
            return state;
        }
    }
};

export default reducers;
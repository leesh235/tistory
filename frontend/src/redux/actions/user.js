export const USER_ACTION_TYPE = "user";

export const setUserId = (data) => {
    return {
        type: USER_ACTION_TYPE,
        data: data
    }
};
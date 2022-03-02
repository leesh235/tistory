export const USER_ACTION_TYPE = "user" as const;

export const setUser = (data: string) => {
    return {
        type: USER_ACTION_TYPE,
        data: data
    }
};
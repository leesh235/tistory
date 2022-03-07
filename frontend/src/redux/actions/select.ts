export const SELECT_ACTION_TYPE = "select" as const;

export const setSelect = (data: number) => {
    return {
        type: SELECT_ACTION_TYPE,
        data: data
    }
};
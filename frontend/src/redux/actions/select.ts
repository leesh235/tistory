export const SELECT_ACTION_TYPE = "select" as const;

interface Porps{
    name: string,
    id: number,
}

export const setSelect = (data: Porps) => {
    return {
        type: SELECT_ACTION_TYPE,
        data: data
    }
};
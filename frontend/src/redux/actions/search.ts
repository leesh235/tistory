export const SEARCH_ACTION_TYPE = "search" as const;

export const setSearch = (data: string) => {
    return {
        type: SEARCH_ACTION_TYPE,
        data: data
    }
};
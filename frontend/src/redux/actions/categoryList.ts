export const CATEGORYLIST_ACTION_TYPE = "categoryList" as const;

export const setCategoryList = (data: Array<{id: number, name: string}>) => {
    return {
        type: CATEGORYLIST_ACTION_TYPE,
        data: data
    }
};
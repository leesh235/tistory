export const CATEGORY_ACTION_TYPE = "category" as const;

export const setCategoryId = (data: number) => {
    return {
        type: CATEGORY_ACTION_TYPE,
        data: data
    }
};
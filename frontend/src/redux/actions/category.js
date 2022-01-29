export const CATEGORY_ACTION_TYPE = "category";

export const setCategoryId = (data) => {
    return {
        type: CATEGORY_ACTION_TYPE,
        data: data
    }
};
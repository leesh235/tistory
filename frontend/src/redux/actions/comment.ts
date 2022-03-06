export const COMMENT_ACTION_TYPE = "comment" as const;

export const setComment = (data: number) => {
    return {
        type: COMMENT_ACTION_TYPE,
        data: data
    }
};
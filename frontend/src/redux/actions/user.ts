export const USER_ACTION_TYPE = "user" as const;

interface Props {
    role: string,
}

export const setUser = (data: Props) => {
    return {
        type: USER_ACTION_TYPE,
        data: data
    }
};
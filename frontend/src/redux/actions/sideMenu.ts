export const SIDEMENU_ACTION_TYPE = "sideMenu" as const;

export const setSideBar = (data: boolean) => {
    return {
        type: SIDEMENU_ACTION_TYPE,
        data: data
    }
};
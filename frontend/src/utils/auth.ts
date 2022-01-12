export const getToken = () => {
    const jwt = localStorage.getItem("token");
    return jwt;
}

export const isLogedIn = () => {
    const jwt = localStorage.getItem("token");
    return jwt ? true : false;
}
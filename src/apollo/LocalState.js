export const defaults = {
    isLoggedIn: Boolean(localStorage.getItem("token")) || false
};

export const resolvers = {
    Mutation: {
        userLogIn: (_, {token} , {cache}) => {
            localStorage.setItem("token",token);
            cache.writeData({
                data: {
                    isLoggedIn: true
                }
            });

            return null;
        },
        userLogOut: (_, __, {cache}) => {
            localStorage.removeItem("token");
            cache.writeData({
                data: {
                    isLoggedIn: false
                }
            });
            
            window.location.href="/";
            return null;
        }
    }
};
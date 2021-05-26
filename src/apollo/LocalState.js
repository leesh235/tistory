export const defaults = {
    isLoggeIn: Boolean(localStorage.getItem("token") || false )
};

export const resolvers = {
    Mutation: {
        UserLogIn: (_, {token} , {cache}) => {
            localStorage.setItem("token",token);
            cache.modify({
                data: {
                    isLoggeIn: true
                }
            });

            return null;
        },
        UserLogOut: (_, __, {cache}) => {
            localStorage.removeItem("token");
            cache.modify({
                data: {
                    isLoggeIn: false
                }
            });
            
            window.location.href="/";
            return null;
        }
    }
};
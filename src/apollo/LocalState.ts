import { TOKENINFO } from "./tokenQuery";

interface Token{
    token: any
}

interface Cache{
    cache: any
}

// const defaults = {
//     isLoggedIn: Boolean(localStorage.getItem("token")) || false
// };

export const resolvers = {
    Mutation: {
        userLogIn: (_ : any, {token} : Token , {cache} : Cache) => {
            localStorage.setItem("token",token);
            cache.writeQuery({
                query: TOKENINFO,
                data: {
                    isLoggedIn: true
                }
            })

            return null;
        },
        userLogOut: (_ : any, __ : any, {cache} : Cache) => {
            localStorage.removeItem("token");
            cache.writeQuery({
                query: TOKENINFO,
                data: {
                    isLoggedIn: false
                }
            })
            
            return null;
        }
    }
};
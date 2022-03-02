import { TOKENINFO } from "./tokenQuery";
import { currentRole } from "./apollo";

interface Token{
    token: string,
    role: string,
}

interface Cache{
    cache: any
}

export const resolvers = {
    Mutation: {
        userLogIn: (_ : any, {token, role} : Token , {cache} : Cache) => {
            //localStorage에 토큰 저장
            localStorage.setItem("token", token);
            //role에 새로운 값 저장
            localStorage.setItem("role", role);
            cache.writeQuery({
                query: TOKENINFO,
                data: {
                    isLoggedIn: true,
                    role
                }
            })
            // return cache.readQuery({query: TOKENINFO});
            return null;
        },
        userLogOut: (_ : any, __ : any, {cache} : Cache) => {
            localStorage.removeItem("token");
            //새로고침이 안될 시 초기화 안됨 방지
            localStorage.removeItem("role");
            cache.writeQuery({
                query: TOKENINFO,
                data: {
                    isLoggedIn: false,
                    role: ""
                }
            })
            
            return null;
        }
    }
};
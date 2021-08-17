import { PrismaClient } from "@prisma/client";
import { generatToken, generatPassword } from "../../utile";

const prisma = new PrismaClient();

export default {
    Mutation: {
        login: async (_, args) => {
            try {
                
                const { email, password } = args;

                //email존재 여부확인
                const userInfo = await prisma.user.findUnique({
                    where:{
                        email
                    }
                });

                //user가 없으면
                if(!userInfo){
                    return {
                        email: null,
                        nickName: null,
                        userRole: null,
                        token: null,
                        status: "noExist"
                    };
                };
    
                //password가 다르면
                if(userInfo.password !== generatPassword(password)){
                    return {
                        email: null,
                        nickName: null,
                        userRole: null,
                        token: null,
                        status: "unmatchedPassword"
                    };
                };

                //토큰생성
                const token = generatToken(userInfo.userId);
                
                return {
                    email: userInfo.email,
                    nickName: userInfo.nickName,
                    userRole: userInfo.userRole,
                    token: token,
                    status: "success"
                };

            } catch(error) {
                console.log(error);
                return {
                    email: null,
                    nickName: null,
                    userRole: null,
                    token: null,
                    status: "server error"
                };
            }
        }
    }
}
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
                        status: "noExist",
                        check: false,
                        user: {
                            email: null,
                            nickName: null,
                            userRole: null,
                            token: null
                        }
                    };
                }
                //password가 다르면
                else if(userInfo.password !== generatPassword(password)){
                    return {
                        status: "unmatchedPassword",
                        check: false,
                        user: {
                            email: null,
                            nickName: null,
                            userRole: null,
                            token: null
                        }
                    };
                }
                //로그인 성공
                else{
                    //토큰생성
                    const token = generatToken(userInfo.userId);
                    
                    return {
                        status: "success",
                        check: true,
                        user: {
                            email: userInfo.email,
                            nickName: userInfo.nickName,
                            userRole: userInfo.userRole,
                            token: token
                        }
                    };
                }
            } catch(error) {
                console.log(error);
                return {
                    status: "server error",
                    check: false,
                    user: {
                        email: null,
                        nickName: null,
                        userRole: null,
                        token: null
                    }
                };
            }
        }
    }
}
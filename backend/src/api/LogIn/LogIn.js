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
                        status: 404,
                        message: "존재하지 않는 이메일입니다.",
                        data: {}
                    };
                }
                //password가 다르면
                else if(userInfo.password !== generatPassword(password)){
                    return {
                        status: 409,
                        message: "비밀번호가 틀렸습니다",
                        data: {}
                    };
                }
                //로그인 성공
                else{
                    //토큰생성
                    const token = generatToken(userInfo.id);
                    
                    return {
                        status: 200,
                        message: "로그인 성공",
                        data: {
                            email: userInfo.email,
                            nickName: userInfo.nickName,
                            role: userInfo.role,
                            token: token
                        }
                    };
                }
            } catch(error) {
                console.log(error);
                return {
                    status: 500,
                    message: "server error",
                    data: {}
                };
            }
        }
    }
}
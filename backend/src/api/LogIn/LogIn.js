import { PrismaClient } from "@prisma/client";
import { generatToken, generatPassword } from "../../utile";
import { SUCCESS, ERROR, SERVER_ERROR } from "../../constants/statusCode";
import { REQUIRED_INPUT, NOT_EXIST_USER, PASSWORD_ERROR, SUCCESS_LOGIN } from "../../constants/message";

const prisma = new PrismaClient();

export default {
    Mutation: {
        login: async (_, args) => {
            try {
                
                const { email, password } = args;

                //빈칸 여부
                if(email === "" || password === ""){
                    return {
                        __typename: "LogInFailure",
                        status: ERROR,
                        message: REQUIRED_INPUT,
                    };
                }

                //email존재 여부확인
                const userInfo = await prisma.user.findUnique({
                    where:{
                        email
                    }
                });

                //user가 없으면
                if(!userInfo){
                    return {
                        __typename: "LogInFailure",
                        status: ERROR,
                        message: NOT_EXIST_USER,
                    };
                }

                //password가 다르면
                if(userInfo.password !== generatPassword(password)){
                    return {
                        __typename: "LogInFailure",
                        status: ERROR,
                        message: PASSWORD_ERROR,
                    };
                }
         
                //토큰생성
                const token = generatToken(userInfo.id);
                
                return {
                    __typename: "LogInSuccess",
                    status: SUCCESS,
                    message: SUCCESS_LOGIN,
                    data: {
                        email: userInfo.email,
                        nickName: userInfo.nickName,
                        role: userInfo.role,
                        token: token
                    }
                };

            } catch(error) {
                throw new Error(SERVER_ERROR);
            }
        }
    }
}
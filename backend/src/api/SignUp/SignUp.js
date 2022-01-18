import { PrismaClient } from "@prisma/client";
import { generatPassword } from "../../utile";
import { SUCCESS, ERROR, SERVER_ERROR } from "../../constants/statusCode";
import { REQUIRED_INPUT, EXIST_USER, SUCCESS_SIGNUP } from "../../constants/message";

const prisma = new PrismaClient();

export default {
    Mutation: {
        signUp: async (_,args) => {
            try {
         
                const { nickName, email, password } = args;

                //email중복이 있으면 exsits가 true값이 된다.
                const exist = await prisma.user.findFirst({
                    where:{
                        email
                    }
                });

                // exist가 true면 중복 존재로 error 발생
                if(exist){
                    return {
                        __typename: "SignUpFailure",
                        status: ERROR,
                        message: EXIST_USER,
                    };
                }

                //하나라도 공백이면 가입 실패
                if( nickName === "" || email === "" || password === "" ){
                    return {
                        __typename: "SignUpFailure",
                        status: ERROR,
                        message: REQUIRED_INPUT,
                    };
                }

                //연결된 db에 정보넣기
                await prisma.user.create({ 
                    data:{
                        nickName,
                        email, 
                        password:generatPassword(password),
                    }
                });

                return {
                    __typename: "SignUpSuccess",
                    status: SUCCESS,
                    message: SUCCESS_SIGNUP,
                    data: {
                        email: email,
                        nickName: nickName
                    }
                };
                
            } catch(error) {
                throw new Error(SERVER_ERROR);
            }
        }
    }
};
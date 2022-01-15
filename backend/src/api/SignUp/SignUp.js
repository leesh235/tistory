import { PrismaClient } from "@prisma/client";
import { generatPassword } from "../../utile";

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

                //exist가 true면 중복 존재로 error 발생
                if(exist){
                    return {
                        status: 409,
                        message: "이미 가입한 이메일입니다.",
                        data: {}
                    };
                }
                //하나라도 공백이면 가입 실패
                else if( nickName === "" || email === "" || password === "" ){
                    return {
                        status: 400,
                        message: "필수 항목을 채워주세요",
                        data: {}
                    };
                }
                //회원가입 성공
                else{
                    //연결된 db에 정보넣기
                    await prisma.user.create({ 
                        data:{
                            nickName,
                            email, 
                            password:generatPassword(password),
                        }
                    });
                    return {
                        status: 200,
                        message: "회원 가입 성공",
                        data: {
                            email: email,
                            nickName: nickName
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
};
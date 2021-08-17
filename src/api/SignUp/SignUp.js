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
                        check: false,
                        status: "exist"
                    };
                }
                //하나라도 공백이면 가입 실패
                else if( nickName === "" || email === "" || password === "" ){
                    return {
                        check: false,
                        status: "필수 입력칸을 모두 채워주세요"
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
                            userRole: "member"
                        }
                    });
                    return {
                        check: true,
                        status: "sign up success"
                    };
                }
            } catch(error) {
                console.log(error);
                return {
                    check: false,
                    status: "server error"
                };
            }
        }
    }
};
import { PrismaClient } from "@prisma/client";
import { generatPassword } from "../../utile";

const prisma = new PrismaClient();

export default {
    Mutation: {
        create: async (_,args) => {
            try {

                const { userId, email, password } = args;

                //하나라도 공백이면 가입 실패
                if( userId === "" || email === "" || password === "" ){
                    return false;
                }

                //email or userId 중 중복이 있으면 exsits가 true값이 된다.
                const exist = await prisma.user.findFirst({
                    where:{
                        OR:[
                            {userId}, {email},
                        ],
                    },
                });
                
                //exist가 true면 중복 존재로 error 발생
                if(exist){
                    throw Error("Overlap email or userId ");
                }
                
                //연결된 db에 정보넣기
                await prisma.user.create({ data:{userId, email, password:generatPassword(password)} });
                return true;

            } catch(error) {
                console.log(error);
                return false;
            }
        }
    }
};
import { PrismaClient } from "@prisma/client";
import { generatToken, generatPassword } from "../../utile";

const prisma = new PrismaClient();

export default {
    Mutation: {
        login: async (_, args) => {
            try {
                
                const { userId, password } = args;

                //email존재 여부확인
                const userInfo = await prisma.user.findUnique({
                    where:{
                        userId
                    }
                });

                //user가 없으면
                if(!userInfo){
                    return null;
                };
    
                //password가 다르면
                if(userInfo.password !== generatPassword(password)){
                    return null;
                };

                //토큰생성
                const token = generatToken(userInfo.id);
                
                return token;

            } catch(error) {
                console.log(error);
                return null;
            }
        }
    }
}
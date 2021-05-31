import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export default {
    Mutation: {
        create: async (_,args) => {
            const { userId, email, password } = args;
            
            //email or userId 중 중복이 있으면 exsits가 true값이 된다.
            const exist = await prisma.user.findFirst({
                where:{
                    OR:[
                        {userId}, {email},
                    ],
                },
            });
            //true일때 오류
            if(exist){
                throw Error("Overlap email or userId ");
            }

            //password hashe화
            const hashePassword = await bcrypt.hash(password, 5);
            //연결된 db에 정보넣기
            await prisma.user.create({ data:{userId, email, password:hashePassword} });
            return true;
        }
    }
};
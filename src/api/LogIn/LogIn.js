import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export default {
    Mutation: {
        login: async (_, args) => {
            const { userId, password } = args;

            //email존재 여부확인
            const userInfo = await prisma.user.findUnique({
                where:{
                    userId
                }
            });
            //없으면 오류발생
            if(!userInfo){
                throw Error("userId does not exist.");
            }

            //password 비교하기
            const passwordMatch = await bcrypt.compare(password, userInfo.password);
            //다르면 오류발생
            if(!passwordMatch){
                throw Error("This password is incorrect.");
            }

            const token = jwt.sign({id: userInfo.id}, process.env.SECRET);
            return token;
        }
    }
}
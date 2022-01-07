import { PrismaClient } from "@prisma/client";
import { isAuthenticated, generatPassword } from "../../utile"

const prisma = new PrismaClient();

export default {
    Mutation: {
        ModifyProfile: async (_, args, { request } ) => {
            try{
                
                const exist = isAuthenticated(request);
     
                if(exist){
                    const { password } = args;
                    const userId = request.user.userId;  

                    if(password !== undefined && password !== null){
                        await prisma.user.update({
                            where:{
                                userId
                            },
                            data: {
                                password:generatPassword(password)
                            }
                        })

                        return {
                            check: true,
                            status: "success",
                        };
                    } else{
                        return {
                            check: false,
                            status: "not modify password",
                        };
                    }

                }else{
                    console.log("You need to log in to perform this action1");
                    return {
                        check: false,
                        status: "is mot log in",
                    };
                }

            } catch (error){
                console.log(error);
                return {
                    check: false,
                    status: "error",
                };
            }
        }
    }
}
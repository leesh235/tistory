import { PrismaClient } from "@prisma/client";
import { isAuthenticated, generatPassword } from "../../utile"

const prisma = new PrismaClient();

export default {
    Mutation: {
        ModifyUserImg: async(_, args, { request } ) => {
            try{
                const exist = isAuthenticated(request);

                if( exist ){
                
                    const { userImg } = args;
                    const userId = request.user.userId;
    
                    if(userImg){
                        const data = await prisma.user.update({
                            where:{
                                userId
                            },
                            data: {
                                userImg: true
                            }
                        })
    
                        return {
                            check: true,
                            status: "success",
                        };
                    }else{
                        return {
                            check: false,
                            status: "no exist img",
                        };
                    }

                }else{
                    console.log("You need to log in to perform this action2");
                    return {userImg:""};
                }

            } catch (error){
                console.log(error);
                return {userImg:""};
            }
        }
    }
}
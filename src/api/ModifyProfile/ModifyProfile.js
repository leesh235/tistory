import { PrismaClient } from "@prisma/client";
import { isAuthenticated, generatPassword } from "../../utile"

const prisma = new PrismaClient();

export default {
    Mutation: {
        ModifyProfile: async (_, args, { request } ) => {
            try{
                
                const exist = isAuthenticated(request);
                // console.log(request.user);
                if( exist === true ){
                    const { password } = args;
                    const id = request.user.id;
                    // console.log(id);

                    if(password !== undefined && password !== null){
                        await prisma.user.update({
                            where:{
                                id
                            },
                            data: {
                                password:generatPassword(password)
                            }
                        })
                    }

                    return true;

                }else{
                    console.log("You need to log in to perform this action");
                    return false;
                }

            } catch (error){
                console.log(error);
                return false;
            }
        },
        ModifyUserImg: async(_, args, { request } ) => {
            try{

                const exist = isAuthenticated(request);

                if( exist === true ){
                
                    const id = request.user.id;

                    if(userImg !== undefined && userImg !== null){
                        setUserImg = id + userImg;
                    }

                    await prisma.user.update({
                        where:{
                            id
                        },
                        data: {
                            userImg: id + "_profileImg",
                        }
                    })

                    return true;
                }else{
                    console.log("You need to log in to perform this action");
                    return false;
                }

            } catch (error){
                console.log(error);
                return false;
            }
        }
    }
}
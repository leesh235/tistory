import { PrismaClient } from "@prisma/client";
import { isAuthenticated } from "../../utile"

const prisma = new PrismaClient();

export default {
    Mutation: {
        createPost: async (_, args, { request } ) => {
            try{
                
                const exist = isAuthenticated(request);
                // console.log(request.user);
                if( exist === true ){
                    const { title, contents } = args;
                    const userId = request.user.userId;
                    await prisma.post.create({
                        data: {
                            id: userId,
                            title,
                            contents
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
import { PrismaClient } from "@prisma/client";
import { isAuthenticated } from "../../utile"

const prisma = new PrismaClient();

export default {
    Mutation: {
        createPost: async (_, args, { request } ) => {
            try{
                
                const exist = isAuthenticated(request);
                // console.log(request);
                //  = request.headers.authorization
                if( exist === true ){
                    const { title, contents } = args;
                    console.log(title, contents);
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
                    return false;
                }

            } catch (error){
                console.log(error);
                return false;
            }
        }
    }
}
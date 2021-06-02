import { PrismaClient } from "@prisma/client";
import { isAuthenticated } from "../../utile"

const prisma = new PrismaClient();

export default {
    Mutation: {
        createPost: async (_, args, { request } ) => {
            try{
                
                const exist = isAuthenticated(request);
                if( exist === true ){
                    const { title, contents } = args;
                    const id = request.user.id;
                    await prisma.post.create({
                        data: {
                            id,
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
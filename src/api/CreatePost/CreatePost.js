import { PrismaClient } from "@prisma/client";
import { isAuthenticated } from "../../utile"

const prisma = new PrismaClient();

export default {
    Mutation: {
        createPost: async (_, args, {request}) => {
            try{
                console.log(request.headers.payload)
                if( request.user.userId !== null ){
                    const { title, contents } = args;
                    const id = request.user.userId;
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
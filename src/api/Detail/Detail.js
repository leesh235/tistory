import { PrismaClient } from "@prisma/client";
import { isAuthenticated } from "../../utile"

const prisma = new PrismaClient();

export default {
    Query: {
        getPost: async(_, args, {request}) => {
            try{
                const exist = isAuthenticated(request);

                if(exist === true){
                    const { postId } = args;
                    const post = await prisma.post.findUnique({
                        where: { postId }
                    })

                    if(post !== null){
                        return post;
                    }else{
                        return null;
                    }

                }else{
                    throw Error("You need to log in to perform this action");
                }

            }catch(error){
                console.log(error);
                return null;
            }
        }
    }
}
import { PrismaClient } from "@prisma/client";
import { isAuthenticated } from "../../utile"

const prisma = new PrismaClient();

export default {
    Query: {
        getPost: async(_, args, {request}) => {
            try{
                const exist = isAuthenticated(request);
                console.log(exist)
                if(exist === true){
                    const { postId } = args;
                    // console.log(postId)
                    const post = await prisma.post.findUnique({
                        where: { postId }
                    })
                    
                    if(post !== null){
                        // console.log(post);
                        return post;
                    }else{
                        return null;
                    }

                }else{
                    console.log("You need to log in to perform this action");
                    return null
                }

            }catch(error){
                console.log(error);
                return null;
            }
        }
    }
}
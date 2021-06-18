import { PrismaClient } from "@prisma/client";
import { isAuthenticated } from "../../utile"

const prisma = new PrismaClient();

export default {
    Query: {
        getPost: async(_, args, {request}) => {
            try{
                const exist = isAuthenticated(request);
                // console.log(exist)
                // console.log(request.user.userId)
                if(exist === true){
                    const { postId, id } = args;
                    // console.log(postId)
                    const post = await prisma.post.findUnique({
                        where: { postId }
                    })
                    
                    if(post !== null){
                        // console.log(post);
                        if(request.user.userId === id){
                            return {
                                equal: true,
                                Post: post
                            };
                        }else{
                            return {
                                equal: false,
                                Post: post
                            };
                        }
                    }else{
                        return {
                            equal: false,
                            Post: null
                        }
                    }

                }else{
                    console.log("You need to log in to perform this action");
                    return {
                        equal: false,
                        getPost: null
                    }
                }

            }catch(error){
                console.log(error);
                return null;
            }
        }
    }
}
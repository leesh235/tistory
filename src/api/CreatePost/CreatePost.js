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
                    const newPost = await prisma.post.create({
                        data: {
                            writer: userId,
                            title,
                        }
                    })
                    if(contents !== ""){
                        return {
                            postId: newPost.postId,
                            status: "success"
                        };
                    }else{
                        return {
                            postId: null,
                            status: "no contents"
                        };
                    }
                }else{
                    return {
                        postId: null,
                        status: "no exist"
                    };
                }

            } catch (error){
                console.log(error);
                return {
                    postId: null,
                    status: "server error"
                };
            }
        }
    }
}
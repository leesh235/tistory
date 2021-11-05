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
                    const userId = request.user.userId
                    const email = request.user.email;
                    const newPost = await prisma.post.create({
                        data: {
                            userId,
                            writer: email,
                            title,
                        }
                    })
              
                    if(contents){
                        return {
                            postInfo: {
                                postId: newPost.postId,
                                writer: email,
                            },
                            check: true,
                            status: "success"
                        };
                    }else{
                        return {
                            postInfo: {
                                postId: newPost.postId,
                                writer: email,
                            },
                            check: false,
                            status: "no contents"
                        };
                    }
                }else{
                    return {
                        postInfo: {
                            postId: null,
                            writer: null,
                        },
                        check: false,
                        status: "is not log in"
                    };
                }

            } catch (error){
                return {
                    postInfo: {
                        postId: null,
                        writer: null,
                    },
                    check: false,
                    status: "server error"
                };
            }
        }
    }
}
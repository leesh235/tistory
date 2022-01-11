import { PrismaClient } from "@prisma/client";
import { isAuthenticated } from "../../utile"

const prisma = new PrismaClient();

export default {
    Query: {
        getPostDetail: async(_, args, {request}) => {
            try{
                const exist = isAuthenticated(request);

                if(exist === true){
                    const { postId } = args;
                    const userId= request.user.userId;

                    const post = await prisma.post.findUnique({
                        where: { 
                            postId
                        }
                    })
                    
                    if(post !== null){
                        if(userId === post.userId){
                            return {
                                    Post: {
                                        postId: post.postId,
                                        writer: post.writer,
                                        title: post.title,
                                        contents: post.contents,
                                        createdAt: post.createdAt,
                                    },
                                    equal: true,
                                    check: true,
                                    status: "success and writer",
                                };
                        }else{
                            return {
                                Post: {
                                    postId: post.postId,
                                    writer: post.writer,
                                    title: post.title,
                                    contents: post.contents,
                                    createdAt: post.createdAt,
                                },
                                equal: false,
                                check: true,
                                status: "success",
                            };
                        }
                    }else{
                        return {
                            Post: {
                                postId: null,
                                writer: null,
                                title: null,
                                contents: null,
                                createdAt: null,
                            },
                            equal: false,
                            check: false,
                            status: "no post",
                        };
                    }
                }else{
                    console.log("You need to log in to perform this action");
                    return {
                        Post: {
                            postId: null,
                            writer: null,
                            title: null,
                            contents: null,
                            createdAt: null,
                        },
                        equal: false,
                        check: false,
                        status: "not log in",
                    };
                }

            }catch(error){
                console.log(error.reponse);
                return {
                    Post: {
                        postId: null,
                        writer: null,
                        title: null,
                        contents: null,
                        createdAt: null,
                    },
                    equal: false,
                    check: false,
                    status: "server error",
                };
            }
        }
    }
}
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
                    const email = request.user.email;
                    const newPost = await prisma.post.create({
                        data: {
                            writer: email,
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
        },
        uploadText: async (_, args, { request } ) => {
            try{
                const exist = isAuthenticated(request);
                console.log(request.user);
                if( exist === true ){
                    const { postId } = args;
                    const userId = request.user.userId;

                    if(postId !== ""){
                        
                        const findPost = await prisma.post.findUnique({
                            where:{
                                postId: Number(postId)
                            }
                        })

                        if(findPost.contents !== "exist"){
                            const uploadText = await prisma.post.update({
                                where: {
                                    postId: Number(postId)
                                },
                                data: {
                                    contents: "exist"
                                }
                            })
                            return {
                                check: true,
                                status: "success"
                            };
                        }else{
                            return {
                                check: true,
                                status: "success Modify"
                            }
                        }
                    }else{
                        return {
                            check: false,
                            status: "no contents"
                        };
                    }
                }else{
                    return {
                        check: false,
                        status: "no exist"
                    };
                }
            }catch(err){   
                console.log(err);
                return {
                    check: false,
                    status: "server error"
                };
            }
        }
    }
}
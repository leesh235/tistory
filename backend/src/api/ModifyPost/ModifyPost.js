import { PrismaClient } from "@prisma/client";
import { isAuthenticated } from "../../utile"

const prisma = new PrismaClient();

export default {
    Mutation: {
        ModifyPost: async (_, args, { request } ) => {
            try{
                
                const exist = isAuthenticated(request);
           
                if(exist){
                    const { postId, title } = args;
                    const userId = request.user.userId;
           
                    const existPost = await prisma.post.findUnique({
                        where:{
                            postId
                        }
                    })
                    
                    if(userId === existPost.userId){
                        if(existPost.title === title){
                            return {
                                check: true,
                                status: "didn't change the title"
                            };
                        }else{
                            await prisma.post.update({
                                where:{
                                    postId
                                },
                                data: {
                                    title
                                }
                            })
                            return {
                                check: true,
                                status: "success"
                            };
                        }
                    }else{
                        return {
                            check: false,
                            status: "You're not the author of this post."
                        };
                    }
                }else{
                    console.log("You need to log in to perform this action");
                    return {
                        check: false,
                        status: "Is not log in"
                    };
                }
            } catch (error){
                console.log(error);
                return {
                    check: false,
                    status: "error"
                };
            }
        }
    }
}
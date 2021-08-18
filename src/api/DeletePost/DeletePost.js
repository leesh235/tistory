import { PrismaClient } from "@prisma/client";
import { isAuthenticated } from "../../utile"

const prisma = new PrismaClient();

export default {
    Mutation: {
        DeletePost: async(_, args, {request}) => {
            try{
                const exist = isAuthenticated(request);

                if(exist){

                    const { postId } = args;
                    const userId = request.user.userId;

                    const user = await prisma.user.findUnique({
                        where:{
                            userId
                        }
                    })

                    const post = await prisma.post.findUnique({
                        where:{
                            postId: Number(postId)
                        }
                    })


                    if(user.email === post.writer){
                        await prisma.post.delete({
                            where:{
                                postId: Number(postId)
                            }
                        })

                        return {
                            check: true,
                            status: "success"
                        };
                    }else{
                        return {
                            check: false,
                            status: "not writer"
                        };
                    }
                    

                }else{
                    return {
                        check: false,
                        status: "not log in"
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
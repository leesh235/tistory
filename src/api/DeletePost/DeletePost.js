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

                    const post = await prisma.post.findUnique({
                        where:{
                            postId
                        }
                    })

                    if(post.userId === userId){
                        await prisma.post.delete({
                            where:{
                                AND:[
                                    {postId}, {userId}
                                ]
                            }
                        })

                        return {
                            check: true,
                            status: "success"
                        };
                    }else{
                        return {
                            check: false,
                            status: "You're not the author of this post."
                        };
                    }            
                }else{
                    return {
                        check: false,
                        status: "is not log in"
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
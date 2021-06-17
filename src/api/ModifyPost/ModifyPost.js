import { PrismaClient } from "@prisma/client";
import { isAuthenticated } from "../../utile"

const prisma = new PrismaClient();

export default {
    Mutation: {
        ModifyPost: async (_, args, { request } ) => {
            try{
                
                const exist = isAuthenticated(request);
                console.log(request.user);
                if( exist === true ){
                    const { postId, title, contents } = args;
                    const id = request.user.userId;
                    // console.log(postId);
                    const existPost = await prisma.post.findFirst({
                        where:{
                            AND:[
                                {id}, {postId}
                            ]
                        }
                    })

                    if(!existPost){
                        console.log()
                        return false;
                    }

                    await prisma.post.update({
                        where:{
                            postId
                        },
                        data: {
                            title,
                            contents
                        }
                    })
                    return true;
                }else{
                    console.log("You need to log in to perform this action");
                    return false;
                }

            } catch (error){
                console.log(error);
                return false;
            }
        }
    }
}
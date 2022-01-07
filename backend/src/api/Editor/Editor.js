import { PrismaClient } from "@prisma/client";
import { isAuthenticated } from "../../utile"

const prisma = new PrismaClient();

export default {
    Mutation: {
        uploadText: async (_, args, { request } ) => {
            try{
                const exist = isAuthenticated(request);
            
                if( exist === true ){
                    const { postId } = args;
                    const userId = request.user.userId;

                    const findPost = await prisma.post.findUnique({
                        where:{
                            postId
                        }
                    })

                    if(userId !== findPost.userId){
                        return {
                            check: false,
                            status: "you`re not author of this post "
                        };
                    }

                    if(!findPost.contents){
                        const uploadText = await prisma.post.update({
                            where: {
                                postId
                            },
                            data: {
                                contents: true
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
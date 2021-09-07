import { PrismaClient } from "@prisma/client";
import { isAuthenticated } from "../../utile"

const prisma = new PrismaClient();

export default {
    Mutation: {
        ModifyPost: async (_, args, { request } ) => {
            try{
                
                const exist = isAuthenticated(request);
                // console.log(request.user);
                if( exist === true ){
                    const { postId, title } = args;
                    console.log(postId, title )
                    const email = request.user.email;
                    // console.log(postId);
                    const existPost = await prisma.post.findFirst({
                        where:{
                            AND:[
                                {writer: email}, {postId: Number(postId)}
                            ]
                        }
                    })
                    
                    if(existPost.contents !== "exist"){
                        console.log("1")
                        return {
                            check: false,
                            status: "not exist"
                        };
                    }
                    console.log("2")
                    await prisma.post.update({
                        where:{
                            postId: Number(postId)
                        },
                        data: {
                            title
                        }
                    })
                    return {
                        check: true,
                        status: "success"
                    };
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
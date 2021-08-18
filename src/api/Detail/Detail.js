import { PrismaClient } from "@prisma/client";
import { isAuthenticated } from "../../utile"

const prisma = new PrismaClient();

export default {
    Query: {
        getPostDetail: async(_, args, {request}) => {
            try{
                const exist = isAuthenticated(request);

                if(exist === true){
                    const { postId, email } = args;

                    const post = await prisma.post.findUnique({
                        where: { 
                            postId: Number(postId)
                        }
                    })
                    
                    if(post !== null){
                        // console.log(post);
                        if(request.user.email === email){
                            return {
                                    equal: true,
                                    status: "success and writer",
                                    Post: post
                                };
                        }else{
                            return {
                                equal: false,
                                status: "success",
                                Post: post
                            };
                        }
                    }else{
                        return {
                            equal: false,
                            status: "no post",
                            Post: null
                        };
                    }

                }else{
                    console.log("You need to log in to perform this action");
                    return {
                        equal: false,
                        status: "not log in",
                        Post: null
                    };
                }

            }catch(error){
                console.log(error.reponse);
                return {
                    equal: false,
                    status: "server error",
                    Post: null
                };
            }
        }
    }
}
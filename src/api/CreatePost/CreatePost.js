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
                    const userId = request.user.userId;
                    const newPost = await prisma.post.create({
                        data: {
                            id: userId,
                            title,
                            contents
                        }
                    })
                    return {postId: newPost.postId};
                }else{
                    console.log("You need to log in to perform this action");
                    return {postId: null};
                }

            } catch (error){
                console.log(error);
                return {postId: null};
            }
        }
    }
}
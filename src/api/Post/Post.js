import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default {
    Query: {
        getPosts: async(_,args,{request}) => {
            try {
                const Posts = await prisma.post.findMany({
                    where:{
                        id: request.user.id
                    }
                })

                if(!Posts){
                    return {
                        exist: false,
                        posts: null
                    }
                }

                return {
                    exist: true,
                    posts: Posts
                }

            }catch (error){
                console.log(error);
                return {
                    exist: false,
                    posts: null
                }
            }
        }
    }
}
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default {
    Query: {
        getAllPosts: async(_,__) => {
            try {
                const post = await prisma.post.findMany({
                    orderBy: {
                        createdAt:"desc"
                    }
                })
                
                if(post !== null){
                    return {
                        posts: post,
                        status: "success"
                    };
                }else{
                    return {
                        posts: null,
                        status: "no posts"
                    };
                }

            }catch (error){
                console.log(error);
                return {
                    posts: null,
                    status: "server error"
                };
            }
        }
    }
}
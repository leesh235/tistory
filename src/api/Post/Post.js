import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default {
    Query: {
        getAllPosts: async(_,args) => {
            try {
                const { count, page } = args;

                const totalPost = await prisma.post.findMany()

                const postLen = totalPost.length;

                const post = await prisma.post.findMany({
                    
                    skip: (page - 1) * count,
                    take: count,
                    orderBy: {
                        createdAt:"desc"
                    }
                })
                
                if(post !== null){
                    return {
                        posts: post,
                        postCnt: postLen,
                        status: "success"
                    };
                }else{
                    return {
                        posts: null,
                        postCnt: 0,
                        status: "no posts"
                    };
                }

            }catch (error){
                console.log(error);
                return {
                    posts: null,
                    postCnt: 0,
                    status: "server error"
                };
            }
        }
    }
}
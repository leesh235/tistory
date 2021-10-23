import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default {
    Query: {
        getAllPosts: async(_,args) => {
            try {
                const { count, page } = args;
                console.log(count, page)
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
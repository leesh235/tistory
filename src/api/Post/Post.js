import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default {
    Query: {
        getAllPosts: async(_,__) => {
            try {
                const post = await prisma.post.findMany({
                    where: {},
                    orderBy: {
                        createdAt:"desc"
                    }
                })
                
                if(post !== null){
                    console.log(post);
                    return post;
                }else{
                    return null;
                }

            }catch (error){
                console.log(error);
                return null;
            }
        }
    }
}
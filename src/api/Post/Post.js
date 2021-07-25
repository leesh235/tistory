import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default {
    Query: {
        getAllPosts: async(_,__) => {
            try {
                const posts = await prisma.post.findMany({
                    where: {
                        title: "w"
                    }
                })

                if(posts !== null){
                    console.log(posts);
                    return  posts;
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
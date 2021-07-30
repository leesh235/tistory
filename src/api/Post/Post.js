import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default {
    Query: {
        getAllPosts: async(_,__) => {
            try {
                const posts = await prisma.post.findMany({
                    where: {},
                    orderBy: {
                        createdAt:"desc"
                    }
                })

                if(posts !== null){
                    console.log(posts);
                    return  {posts:posts};
                }else{
                    return {posts:null};;
                }

            }catch (error){
                console.log(error);
                return {posts:null};;
            }
        }
    }
}
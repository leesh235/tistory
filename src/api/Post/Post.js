import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default {
    Query: {
        getPosts: async(_,__) => {
            try {
                const Posts = await prisma.post.findMany({})

                if(!Posts){
                    return  null
                }else{
                    return Posts;
                }

            }catch (error){
                console.log(error);
                return null;
            }
        }
    }
}
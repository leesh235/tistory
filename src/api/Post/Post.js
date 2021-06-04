import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default {
    Query: {
        getAllPosts: async(_,__) => {
            try {
                const allPosts = await prisma.post.findMany({})

                if(allPosts !== null){
                    // console.log(allPosts);
                    return  allPosts
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
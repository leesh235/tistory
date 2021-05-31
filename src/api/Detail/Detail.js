import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default {
    Query: {
        getPost: async(_,args,{request}) => {
            try{
                
                const Post = await prisma.post.findUnique({
                    
                })

            }catch(error){
                console.log(error);
                return null;
            }
        }
    }
}
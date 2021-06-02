import { PrismaClient } from "@prisma/client";
import { isAuthenticated } from "../../utile"

const prisma = new PrismaClient();

export default {
    Query: {
        getMyPosts: async(_,__,{request}) => {
            try {
                const exist = isAuthenticated(request);

                if(exist){
                    const userId = request.user.userId
                    const myPosts = await prisma.post.findMany({
                        where: { id: userId }
                    })

                    return myPosts
                }else {
                    return null;
                }

            }catch (error){
                console.log(error);
                return null;
            }
        }
    }
}
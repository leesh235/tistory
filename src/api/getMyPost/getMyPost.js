import { PrismaClient } from "@prisma/client";
import { isAuthenticated } from "../../utile"

const prisma = new PrismaClient();

export default {
    Query: {
        getMyPosts: async(_,__,{request}) => {
            try {
                const exist = isAuthenticated(request);

                if(exist){
                    const email = request.user.email
                    const myPosts = await prisma.post.findMany({
                        where: { writer: email }
                    })
                    console.log(myPosts);

                    if(myPosts !== null){
                        return {
                            status: "success",
                            allMyPosts: myPosts
                        }
                    }else{
                        return {
                            status: "no exist my posts",
                            allMyPosts: null
                        }
                    }
                }else {
                    console.log("You need to log in to perform this action");
                    return {
                        status: "not log in",
                        allMyPosts: null
                    }
                }

            }catch (error){
                console.log(error);
                return {
                    status: "server error",
                    allMyPosts: null
                }
            }
        }
    }
}
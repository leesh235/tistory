import { PrismaClient } from "@prisma/client";
import { isAuthenticated } from "../../utile"

const prisma = new PrismaClient();

export default {
    Query: {
        getMyPosts: async(_,args,{request}) => {
            try {
                const exist = isAuthenticated(request);

                if(exist){
                    const { count, page } = args;
                    const userId = request.user.userId;

                    const totalPost = await prisma.post.findMany({
                        where: { userId }
                    })
                    const postLen = totalPost.length;
                    
                    const myPosts = await prisma.post.findMany({
                        skip: (page - 1) * count,
                        take: count,
                        where: { 
                            userId 
                        },
                        orderBy: {
                            createdAt:"desc"
                        }
                    })

                    if(myPosts !== null){
                        return {
                            status: "success",
                            postCnt: postLen,
                            allMyPosts: myPosts
                        }
                    }else{
                        return {
                            status: "no exist my posts",
                            postCnt: 0,
                            allMyPosts: null
                        }
                    }
                }else {
                    console.log("You need to log in to perform this action");
                    return {
                        status: "not log in",
                        postCnt: 0,
                        allMyPosts: null
                    }
                }

            }catch (error){
                console.log(error);
                return {
                    status: "server error",
                    postCnt: 0,
                    allMyPosts: null
                }
            }
        }
    }
}
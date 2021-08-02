import { PrismaClient } from "@prisma/client";
import { isAuthenticated } from "../../utile"

const prisma = new PrismaClient();

export default {
    Mutation: {
        DeletePost: async(_, args, {request}) => {
            try{
                const exist = isAuthenticated(request);

                if(exist){

                    const { postId } = args;
                    const id = request.user.id;

                    const user = await prisma.user.findUnique({
                        where:{
                            id
                        }
                    })

                    const post = await prisma.post.findUnique({
                        where:{
                            postId
                        }
                    })


                    if(user.userId === post.id){
                        await prisma.post.delete({
                            where:{
                                postId
                            }
                        })

                        return true;
                    }else{
                        console.log("작성자가 아닙니다.");
                        return false;
                    }
                    

                }else{
                    console.log("You need to log in to perform this action");
                    return false;
                }
            }catch(err){
                console.log(err);
                return false;
            }
        }
    }
}
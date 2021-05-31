import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default {
    Mutation: {
        createPost: async (_, args, {request}) => {
            try{
                console.log(request.headers.authorization)
                if( request.headers.user.id !== null ){
                    const { title, contents } = args;
                    const id = request.headers.user.id;
                    await prisma.post.create({
                        data: {
                            id,
                            title,
                            contents
                        }
                    })
                    return true;
                }else{
                    return false;
                }

            } catch (error){
                console.log(error);
                return false;
            }
        }
    }
}
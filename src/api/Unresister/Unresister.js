import { PrismaClient } from "@prisma/client";
import { isAuthenticated, generatPassword } from "../../utile";

const prisma = new PrismaClient();

export default {
    Mutation: {
        Unresister: async(_, args, {request}) => {
            try{
                const exist = isAuthenticated(request);

                if(exist){
                    const { userId, password } = args;
                    const id = request.user.id;

                    const userInfo = await prisma.user.findUnique({
                        where:{
                            userId
                        }
                    })

                    if(userInfo.password !== generatPassword(password)){
                        console.log("비밀번호가 다릅니다.")
                        return false;
                    }else{
                        await prisma.post.deleteMany({
                            where: {
                                id: userId
                            }
                        });
    
                        await prisma.user.delete({
                            where:{
                                id
                            }
                        });
                        
                        console.log("success");
                        return true;
                    }

                }else{
                    console.log("You need to log in to perform this action");
                    return false;
                }
            }catch(err){
                console.log("err: ",err);
                return false;
            }
        }
    }
}
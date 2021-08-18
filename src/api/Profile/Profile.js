import { PrismaClient } from "@prisma/client";
import { isAuthenticated } from "../../utile"

const prisma = new PrismaClient();

export default {
    Query: {
        getProfile: async(_, __, {request}) => {
            try {

                const exist = isAuthenticated(request);
                // console.log(exist)
                if(exist){
                    const userId = request.user.userId;

                    const user = await prisma.user.findUnique({
                        where: { userId }
                    })

                    if(user){
                        return {
                            email: user.email,
                            nickName: user.nickName,
                            userRole:  user.userRole,
                            userImgId: user.userImgId,
                            status: "success",
                        };
                    }else{
                        return {
                            email: null,
                            nickName: null,
                            userRole:  null,
                            userImgId: null,
                            status: "no exist",
                        };
                    }

                } else{
                    return {
                        email: null,
                        nickName: null,
                        userRole:  null,
                        userImgId: null,
                        status: "Is not log in",
                    };
                }

            } catch(error) {
                console.log(error);
                return {
                    email: null,
                    nickName: null,
                    userRole:  null,
                    userImgId: null,
                    status: "server error",
                };
            }
        }
    }
}
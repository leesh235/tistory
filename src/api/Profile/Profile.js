import { PrismaClient } from "@prisma/client";
import { isAuthenticated } from "../../utile"

const prisma = new PrismaClient();

export default {
    Query: {
        getProfile: async(_, __, {request}) => {
            try {
                const exist = isAuthenticated(request);

                if(exist){
                    const userId = request.user.userId;

                    const user = await prisma.user.findUnique({
                        where: { userId }
                    })

                    if(user){
                        return {
                            user: {
                                email: user.email,
                                nickName: user.nickName,
                                userRole:  user.userRole,
                                userImg: user.userImg,
                            },
                            check: true,
                            status: "success",
                        };
                    }else{
                        return {
                            user: {
                                email: null,
                                nickName: null,
                                userRole:  null,
                                userImg: null,
                            },
                            check: false,
                            status: "no exist",
                        };
                    }
                } else{
                    return {
                        user: {
                            email: null,
                            nickName: null,
                            userRole:  null,
                            userImg: null,
                        },
                        check: false,
                        status: "Is not log in",
                    };
                }
            } catch(error) {
                console.log(error);
                return {
                    user: {
                        email: null,
                        nickName: null,
                        userRole:  null,
                        userImg: null,
                    },
                    check: false,
                    status: "server error",
                };
            }
        }
    }
}
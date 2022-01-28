import { PrismaClient } from "@prisma/client";
import { isAuthenticated, generatPassword } from "../../utile";
import { SUCCESS, ERROR } from "../../constants/statusCode";
import { SUCCESS_WRITE_USERIMAGE, REQUIRED_LOGIN, ADDMIN_ERROR, REQUIRED_INPUT } from "../../constants/message";

const prisma = new PrismaClient();

export default {
    Mutation: {
        ModifyUserImg: async(_, args, { request } ) => {
            try{
                const exist = isAuthenticated(request);

                if(exist){
                
                    const { imageUrl } = args;
                    const { id, role } = request.user;

                    if(role !== "ADMIN"){
                        return {
                            __typename: "UserImageFailure",
                            status: ERROR,
                            message: ADDMIN_ERROR
                        };
                    }
    
                    if(imageUrl !== ""){
                        return {
                            __typename: "UserImageFailure",
                            status: ERROR,
                            message: REQUIRED_INPUT
                        };
                    }

                    const result = await prisma.user.update({
                        where: {
                            id
                        },
                        data: {
                            imageUrl
                        },
                        select: {
                            id: true,
                            nickName: true,
                            imageUrl: true
                        }
                    })

                    return {
                        __typename: "UserImageSuccess",
                        status: SUCCESS,
                        message: SUCCESS_WRITE_USERIMAGE,
                        data: {
                            ...result
                        }
                    };

                }else{
                    return {
                        __typename: "UserImageFailure",
                        status: ERROR,
                        message: REQUIRED_LOGIN
                    };
                }

            } catch (error){
                throw error;
            }
        }
    }
}
import { PrismaClient } from "@prisma/client";
import { isAuthenticated } from "../../utile";
import { SUCCESS, ERROR } from "../../constants/statusCode";
import { SUCCESS_MODIFY_POST, REQUIRED_LOGIN, ADDMIN_ERROR, REQUIRED_INPUT } from "../../constants/message";

const prisma = new PrismaClient();

export default {
    Mutation: {
        modifyPost: async (_, args, { request } ) => {
            try{
                
                const exist = isAuthenticated(request);
           
                if(exist){
                    const { postId, title } = args;
                    const { id, role } = request.user;

                    if(role !== "ADMIN"){
                        return {
                            __typename: "ModifyPostFailure",
                            status: ERROR,
                            message: ADDMIN_ERROR
                        };
                    }

                    let setData = {};

                    if(title !== ""){
                        setData = {
                            title,
                            modifyAt: new Date()
                        }
                    }else{
                        setData = {
                            modifyAt: new Date()
                        }
                    }

                    const result = await prisma.post.update({
                        where: {
                            id: postId
                        },
                        data: setData,
                        select: {
                            id: true,
                            title: true,
                            modifyAt: true
                        }
                    })

                    return {
                        __typename: "ModifyPostSuccess",
                        status: ERROR,
                        message: SUCCESS_MODIFY_POST,
                        data: {
                            ...result
                        }
                    };         

                }else{
                    return {
                        __typename: "ModifyPostFailure",
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
import { PrismaClient } from "@prisma/client";
import { isAuthenticated } from "../../utile";
import { SUCCESS, ERROR } from "../../constants/statusCode";
import { SUCCESS_WRITE_CONTENTSURL, REQUIRED_LOGIN, ADDMIN_ERROR, REQUIRED_INPUT } from "../../constants/message";

const prisma = new PrismaClient();

export default {
    Mutation: {
        uploadText: async (_, args, { request } ) => {
            try{
                const exist = isAuthenticated(request);
            
                if(exist){
                    const { postId, contentsUrl } = args;
                    const { id, role } = request.user;

                    if(role !== "ADMIN"){
                        return {
                            __typename: "EditorFailure",
                            status: ERROR,
                            message: ADDMIN_ERROR
                        };
                    }
    
                    if(contentsUrl !== ""){
                        return {
                            __typename: "EditorFailure",
                            status: ERROR,
                            message: REQUIRED_INPUT
                        };
                    }

                    const result = await prisma.post.update({
                        where: {
                            id: postId
                        },
                        data: {
                            contentsUrl,
                        },
                        select: {
                            id: true,
                            title: true,
                            contentsUrl: true,
                            modifyAt: true
                        }
                    })

                    return {
                        __typename: "EditorSuccess",
                        status: SUCCESS,
                        message: SUCCESS_WRITE_CONTENTSURL,
                        data: {
                            ...result
                        }
                    };
                
                }else{
                    return {
                        __typename: "EditorFailure",
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
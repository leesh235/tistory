import { PrismaClient } from "@prisma/client";
import { isAuthenticated } from "../../utile";
import { SUCCESS, ERROR } from "../../constants/statusCode";
import { SUCCESS_MODIFY_COMMENT, INCRRECT_AUTHOR, REQUIRED_LOGIN } from "../../constants/message";

const prisma = new PrismaClient();

export default {
    Mutation: {
        modifyComment: async (_, args, { request } ) => {
            try{
                
                const exist = isAuthenticated(request);
         
                if(exist){
                    const { commentId, contents } = args;
                    const { id } = request.user;

                    const comment = await prisma.comment.findFirst({
                        where: {
                            AND: [
                                {
                                    id: commentId
                                },
                                {
                                    deleteAt: null
                                }
                            ]
                        },
                        select: {
                            userId: true
                        }
                    })

                    if(comment.userId !== id){
                        return {
                            __typename: "ModifyCommentFailure",
                            status: ERROR,
                            message: INCRRECT_AUTHOR
                        };
                    }
                    
                    const result = await prisma.comment.update({
                        where: {
                            id: commentId
                        },
                        data: {
                            contents,
                            modifyAt: new Date()
                        },
                        select: {
                            id: true,
                            modifyAt: true,
                            contents: true,
                            users: {
                                select: {
                                    nickName: true
                                }
                            }
                        }
                    })

                    return {
                        __typename: "ModifyCommentSuccess",
                        status: SUCCESS,
                        message: SUCCESS_MODIFY_COMMENT,
                        data: {
                            id: result.id,
                            writer: result.users.nickName,
                            modifyAt: result.modifyAt,
                            contents: result.contents,
                        }
                    };

                }else{
                    return {
                        __typename: "ModifyCommentFailure",
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
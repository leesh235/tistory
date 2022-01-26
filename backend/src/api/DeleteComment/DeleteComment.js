import { PrismaClient } from "@prisma/client";
import { isAuthenticated } from "../../utile";
import { SUCCESS, ERROR, SERVER_ERROR } from "../../constants/statusCode";
import { REQUIRED_LOGIN, ADDMIN_ERROR, SUCCESS_DELETE_POSTLIST, INCRRECT_AUTHOR, ALREADY_DELETE_COMMENT } from "../../constants/message";

const prisma = new PrismaClient();

export default {
    Mutation: {
        deleteComment: async(_, args, {request}) => {
            try{
                const exist = isAuthenticated(request);

                if(exist){
                    const { commentId } = args;
                    const { id } = request.user;

                    const comment = await prisma.comment.findFirst({
                        where: {
                            AND: [
                                {
                                    userId: id
                                },
                                {
                                    id: commentId
                                }
                            ]
                        },
                        select: {
                            deleteAt: true
                        }
                    })

                    if(comment.deleteAt !== null){
                        return {
                            __typename: "DeleteCommentFailure",
                            status: ERROR,
                            message: ALREADY_DELETE_COMMENT
                        };
                    }

                    if(!comment){
                        return {
                            __typename: "DeleteCommentFailure",
                            status: ERROR,
                            message: INCRRECT_AUTHOR
                        };
                    }

                    const result = await prisma.comment.update({
                        where:{
                            id: commentId
                        },
                        data: {
                            deleteAt: new Date()
                        }
                    })

                    return {
                        __typename: "DeleteCommentSuccess",
                        status: SUCCESS,
                        message: SUCCESS_DELETE_POSTLIST,
                        data: {
                            deleteAt: result.deleteAt
                        }
                    };

                            
                }else{
                    return {
                        __typename: "DeleteCommentFailure",
                        status: ERROR,
                        message: REQUIRED_LOGIN
                    };
                }
            }catch(error){
                throw error;
            }
        }
    }
}
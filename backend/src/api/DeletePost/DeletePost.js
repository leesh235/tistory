import { PrismaClient } from "@prisma/client";
import { isAuthenticated } from "../../utile";
import { SUCCESS, ERROR, SERVER_ERROR } from "../../constants/statusCode";
import { REQUIRED_LOGIN, ADDMIN_ERROR, SUCCESS_DELETE_POSTLIST, INCRRECT_AUTHOR, ALREADY_DELETE_POST } from "../../constants/message";

const prisma = new PrismaClient();

export default {
    Mutation: {
        deletePost: async(_, args, {request}) => {
            try{
                const exist = isAuthenticated(request);

                if(exist){
                    const { postId } = args;
                    const { id } = request.user;

                    const post = await prisma.post.findFirst({
                        where: {
                            AND: [
                                {
                                    id: postId
                                },
                                {
                                    author: {
                                        id
                                    }
                                }
                            ]
                        },
                        select: {
                            id: true,
                            deleteAt: true,
                            author: {
                                select: {
                                    role: true
                                }
                            }
                        }
                    })

                    if(post.author.role !== "ADMIN"){
                        return {
                            __typename: "DeletePostFailure",
                            status: ERROR,
                            message: ADDMIN_ERROR
                        };
                    }

                    if(post.deleteAt !== null){
                        return {
                            __typename: "DeletePostFailure",
                            status: ERROR,
                            message: ALREADY_DELETE_POST
                        };
                    }

                    if(!post){
                        return {
                            __typename: "DeletePostFailure",
                            status: ERROR,
                            message: INCRRECT_AUTHOR
                        };
                    }

                    const result = await prisma.post.update({
                        where:{
                            id: postId
                        },
                        data: {
                            deleteAt: new Date()
                        }
                    })

                    return {
                        __typename: "DeletePostSuccess",
                        status: SUCCESS,
                        message: SUCCESS_DELETE_POSTLIST,
                        data: {
                            deleteAt: result.deleteAt
                        }
                    };

                            
                }else{
                    return {
                        __typename: "DeletePostFailure",
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
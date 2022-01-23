import { PrismaClient } from "@prisma/client";
import { isAuthenticated } from "../../utile";
import { SUCCESS, ERROR, SERVER_ERROR } from "../../constants/statusCode";
import { SUCCESS_WRITE_WRITE, WRONG_ACCESS, REQUIRED_LOGIN } from "../../constants/message";

const prisma = new PrismaClient();

export default {
    Mutation: {
        writeComment: async (_, args, { request } ) => {
            try{
                
                const exist = isAuthenticated(request);
         
                if(exist){
                    const { postId, commentId, contents } = args;
                    const { id } = request.user;

                    const writer = await prisma.user.findUnique({
                        where: {
                            id
                        },
                        select:
                        {
                            nickName: true
                        }
                    })

                    if(!writer){
                        return {
                            __typename: "WriteCommentFailure",
                            status: ERROR,
                            message: WRONG_ACCESS
                        };
                    }
                   
                    const post = await prisma.post.findFirst({
                        where: {
                            id: postId
                        },
                        select: {
                            comments: {
                                where: {
                                    parent: commentId
                                },
                                orderBy: {
                                    createAt: "desc"
                                },
                                select: {
                                    sequence: true,
                                    depth: true
                                }
                            }
                        }
                    })

                    let sequence = 0;
                    let depth = 0;
                    let setParent = 0;

                    if(post){
                        sequence = post.comments.sequence;
                        depth = post.comments.depth;
                        setParent = parent;
                    }

                    const result = await prisma.comment.create({
                        data: {
                            sequence,
                            depth,
                            id,
                            parent: setParent,
                            contents
                        }
                    })

                    return {
                        __typename: "WriteCommentSuccess",
                        status: SUCCESS,
                        message: SUCCESS_WRITE_WRITE,
                        data: {
                            id: result.id,
                            writer: writer.nickName,
                            createAt: result.createAt,
                            contents: result.contents,
                        }
                    };

                }else{
                    return {
                        __typename: "WriteCommentFailure",
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
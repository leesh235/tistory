import { PrismaClient } from "@prisma/client";
import { isAuthenticated } from "../../utile";
import { SUCCESS, ERROR, SERVER_ERROR } from "../../constants/statusCode";
import { SUCCESS_GET_COMMENTLIST } from "../../constants/message";

const prisma = new PrismaClient();

export default {
    Query: {
        getCommentList: async (_, args, { request } ) => {
            try{

                const { postId } = args;
         
                const commentList = await prisma.post.findMany({
                    where: {
                        AND: [
                            {
                                id: postId
                            },
                            {
                                deleteAt: null
                            }
                        ]
                    },
                    select: {
                        comments: {
                            orderBy:{
                                createAt: "asc"                       
                            },
                            select: {
                                id: true,
                                contents: true,
                                createAt: true,
                                deleteAt: true,
                                users: {
                                    select: {
                                        nickName: true
                                    }
                                }
                            }
                        }
                    }
                })

                let result = [];

                for(let i = 0; i < commentList.length; i++){
                    if(commentList[i].deleteAt === null){
                        result.push({
                            commentId: commentList[i].comments.id,
                            writer: commentList[i].comments.users.nickName,
                            comment: commentList[i].comments.contents,
                            createAt: commentList[i].comments.createAt,
                        })
                    }else{
                        result.push({
                            commentId: commentList[i].comments.id
                        })
                    }
                }

                return {
                    __typename: "CommentListSuccess",
                    status: SUCCESS,
                    message: SUCCESS_GET_COMMENTLIST,
                    data: result
                }

            } catch (error){
                throw error;
            }
        }
    }
}
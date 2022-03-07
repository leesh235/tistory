import { PrismaClient } from "@prisma/client";
import { isAuthenticated } from "../../utile";
import { SUCCESS, ERROR, SERVER_ERROR } from "../../constants/statusCode";
import { SUCCESS_GET_COMMENTLIST, DELETECOMMENT } from "../../constants/message";

const prisma = new PrismaClient();

export default {
    Query: {
        getCommentList: async (_, args, { request } ) => {
            try{

                const { postId } = args;

                const commentList = await prisma.comment.findMany({
                    where: {
                        AND: [
                            {
                                postId
                            }
                        ]
                    },
                    orderBy: [
                        {
                            depth: "asc",
                        },
                        {
                            sequence: "asc"
                        },
                        {
                            createAt:"desc"
                        }
                    ],
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
                })

                let result = [];

                for(let i = 0; i < commentList.length; i++){
                    if(commentList[i].deleteAt === null){
                        result.push({
                            commentId: commentList[i].id,
                            writer: commentList[i].users.nickName,
                            comment: commentList[i].contents,
                            createAt: commentList[i].createAt,
                        })
                    }else{
                        result.push({
                            commentId: commentList[i].id,
                            comment: DELETECOMMENT
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
import { PrismaClient } from "@prisma/client";
import { SUCCESS, ERROR, SERVER_ERROR } from "../../constants/statusCode";
import { SUCCESS_GET_POST, NOT_EXIST_POST } from "../../constants/message";

const prisma = new PrismaClient();

export default {
    Query: {
        getPostDetail: async(_, args, {request}) => {
            try{

                const { postId } = args;

                const post = await prisma.post.findFirst({
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
                        id: true,
                        title: true,
                        contentsUrl: true,
                        hits: true,
                        createAt: true,
                        author: {
                            select: {
                                email: true,
                                nickName: true
                            }
                        },
                        categories: {
                            select: {
                                name: true
                            }
                        }
                    }
                })

                if(post === null){
                    return {
                        __typename: "PostFailure",
                        status: ERROR,
                        messgae:NOT_EXIST_POST
                    };
                }

                await prisma.post.update({
                    where: {
                        id: postId
                    },
                    data: {
                        hits: post.hits + 1
                    }
                })
                
                return {
                    __typename: "PostSuccess",
                    status: SUCCESS,
                    message: SUCCESS_GET_POST,
                    data: {
                        id: post.id,
                        title: post.title,
                        contentsUrl: post.contentsUrl,
                        author: post.author.email,
                        createAt: post.createAt,
                        hits: post.hits + 1,
                        category: post.categories.name,
                    }
                };

            }catch(error){
                throw error;
            }
        }
    }
}
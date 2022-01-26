import { PrismaClient } from "@prisma/client";
import { SUCCESS, ERROR } from "../../constants/statusCode";
import { SUCCESS_GET_NEWPOSTLIST, NOT_EXIST_POSTLIST } from "../../constants/message";

const prisma = new PrismaClient();

export default {
    Query: {
        getNewPostList: async(_,args) => {
            try {

                const newPostList = await prisma.post.findMany({
                    where: {
                        deleteAt: null
                    },
                    take: 5,
                    orderBy: {
                        createAt: "desc"
                    },
                    select: {
                        id: true,
                        title: true,
                        createAt: true,
                        hits: true,
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
                });

                const postLen = newPostList.length;

                if(postLen === 0){
                    return {
                        __typename: "NewPostListFailure",
                        status: ERROR,
                        message:NOT_EXIST_POSTLIST
                    };
                }

                let result = [];
                for(let i = 0; i < postLen; i++){
                    result.push({
                        postId: newPostList[i].id,
                        author: newPostList[i].author.email,
                        title: `[${newPostList[i].categories.name}]`+newPostList[i].title,
                        createAt: newPostList[i].createAt,
                        hits: newPostList[i].hits,
                        thumbnail: newPostList[i].thumbnail
                    })
                }

                return {
                    __typename: "NewPostListSuccess",
                    status: SUCCESS,
                    message:SUCCESS_GET_NEWPOSTLIST,
                    data: result
                };

            }catch (error){
                throw error;
            }
        }
    }
}
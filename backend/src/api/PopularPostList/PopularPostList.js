import { PrismaClient } from "@prisma/client";
import { SUCCESS, ERROR } from "../../constants/statusCode";
import { SUCCESS_GET_POPULARPOSTLIST, NOT_EXIST_POSTLIST } from "../../constants/message";

const prisma = new PrismaClient();

export default {
    Query: {
        getPopularPostList: async(_,args) => {
            try {

                const popularPostList = await prisma.post.findMany({
                    where: {
                        deleteAt: null
                    },
                    take: 5,
                    orderBy: {
                        hits: "desc"
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

                const postLen = popularPostList.length;

                if(postLen === 0){
                    return {
                        __typename: "PopularPostListFailure",
                        status: ERROR,
                        message:NOT_EXIST_POSTLIST
                    };
                }

                let result = [];
                for(let i = 0; i < postLen; i++){
                    result.push({
                        postId: popularPostList[i].id,
                        author: popularPostList[i].author.email,
                        title: `[${popularPostList[i].categories.name}]`+popularPostList[i].title,
                        createAt: popularPostList[i].createAt,
                        hits: popularPostList[i].hits,
                        thumbnail: popularPostList[i].thumbnail
                    })
                }

                return {
                    __typename: "PopularPostListSuccess",
                    status: SUCCESS,
                    message:SUCCESS_GET_POPULARPOSTLIST,
                    data: result
                };

            }catch (error){
                throw error;
            }
        }
    }
}
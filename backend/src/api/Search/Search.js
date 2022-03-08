import { PrismaClient } from "@prisma/client";
import { SUCCESS, ERROR, SERVER_ERROR } from "../../constants/statusCode";
import { SUCCESS_GET_POSTLIST, NOT_EXIST_POSTLIST, REQUIRED_INPUT } from "../../constants/message";

const prisma = new PrismaClient();

export default {
    Query: {
        getSearch: async(_, args) => {
            try {
                const { count, page, text } = args;
                //모든 post 불러오기

                if(text === ""){
                    return {
                        __typename: "SearchFailure",
                        status: ERROR,
                        message: REQUIRED_INPUT
                    };
                }
                
                //전체 게시글 수
                const totalPost = await prisma.post.findMany({
                    where: {
                        title: {
                            contains: text
                        }
                    }
                })
                const postLen = totalPost.length;

                if(postLen === 0){
                    return {
                        __typename: "SearchFailure",
                        status: ERROR,
                        message: NOT_EXIST_POSTLIST
                    };
                }

                //title에 text를 포함하고 있는 post 구하기
                const postList = await prisma.post.findMany({
                    where: {
                        title: {
                            contains: text
                        }
                    },
                    skip: (page - 1) * count,
                    take: count,
                    orderBy: {
                        createAt:"desc"
                    },
                    select: {
                        id: true,
                        title: true,
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

                let search = [];
                
                for(let i = 0; i < postList.length; i++){
                    result.push({
                        postId: postList[i].id,
                        author: postList[i].author.email,
                        title: `[${postList[i].categories.name}]`+postList[i].title,
                        createAt: postList[i].createAt,
                        hits: postList[i].hits,
                        thumbnail: ""
                    })
                }

                let result = {
                    search: search,
                    searchQuantity: postLen
                }

                return {
                    __typename: "SearchSuccess",
                    status: SUCCESS,
                    message:SUCCESS_GET_POSTLIST,
                    data: result
                };

            }catch (error){
                throw error;
            }
        }
    }
}
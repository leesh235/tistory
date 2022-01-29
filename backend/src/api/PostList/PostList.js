import { PrismaClient } from "@prisma/client";
import { SUCCESS, ERROR, SERVER_ERROR } from "../../constants/statusCode";
import { SUCCESS_GET_POSTLIST, NOT_EXIST_POSTLIST } from "../../constants/message";

const prisma = new PrismaClient();

export default {
    Query: {
        getPostList: async(_,args) => {
            try {
                const { categoryId, count, page } = args;

                let conditions;

                //전체보기
                if(categoryId === 0){
                    conditions = { 
                        deleteAt: null 
                    }
                }
                //카테고리별 목록보기
                else{
                    conditions = {
                        AND: [
                            {
                                categories:{
                                    id: categoryId
                                }
                            },
                            {
                                deleteAt: null
                            }
                        ]
                    }
                }

                //전체 게시글 수
                const totalPost = await prisma.post.findMany({
                    where: conditions
                });

                const postLen = totalPost.length;

                if(postLen === 0){
                    return {
                        __typename: "PostListFailure",
                        status: ERROR,
                        message:NOT_EXIST_POSTLIST
                    };
                }

                //해당 페이지의 게시글 배열
                const postList = await prisma.post.findMany({
                    where: conditions,
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

                let posts = [];
                for(let i = 0; i < postList.length; i++){
                    posts.push({
                        postId: postList[i].id,
                        author: postList[i].author.email,
                        title: `[${postList[i].categories.name}]`+postList[i].title,
                        createAt: postList[i].createAt,
                        hits: postList[i].hits,
                        thumbnail: postList[i].thumbnail
                    })
                }

                const result = {
                    posts,
                    postsQuantity: postLen
                }

                return {
                    __typename: "PostListSuccess",
                    status: SUCCESS,
                    message:SUCCESS_GET_POSTLIST,
                    data: result
                };

            }catch (error){
                throw new Error(SERVER_ERROR);
            }
        }
    }
}
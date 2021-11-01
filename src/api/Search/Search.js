import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default {
    Query: {
        getSearch: async(_, args) => {
            try {
                const { count, page, text } = args;
                //모든 post 불러오기

                if(text !== ""){
                    const totalPost = await prisma.post.findMany({
                        where: {
                            title: {
                                contains: text
                            }
                        }
                    })
                    const postLen = totalPost.length;
                    //title에 text를 포함하고 있는 post 구하기
                    const getTitle = await prisma.post.findMany({
                        skip: (page - 1) * count,
                        take: count,
                        where: {
                            title: {
                                contains: text
                            }
                        }
                    })
                    // console.log(getTitle);

                    if(getTitle !== null){
                        return {
                            search: getTitle,
                            postCnt: postLen,
                            status: "success"
                        };
                    }else{
                        return {
                            search: null,
                            postCnt: 0,
                            status: "no match"
                        };
                    }
                    
                }else{
                    return {
                        search: null,
                        postCnt: 0,
                        status: "no search word"
                    };
                }

            }catch (error){
                console.log(error);
                    return {
                        search: null,
                        postCnt: 0,
                        status: "error"
                    };
            }
        }
    }
}
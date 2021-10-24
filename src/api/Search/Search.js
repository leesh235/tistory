import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default {
    Query: {
        getSearch: async(_, args) => {
            try {
                const { text } = args;
                //모든 post 불러오기

                if(text){
                    const getPost = await prisma.post.findMany({})
                    const getPostLen = getPost.length;
                    //title에 text를 포함하고 있는 post 구하기
                    const getTitle = getPost.filter((post) => {
                        return post.title.includes(text);
                    })
                    // console.log(getTitle);

                    if(getTitle !== null){
                        return {
                            search: getTitle,
                            postCnt: getPostLen,
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
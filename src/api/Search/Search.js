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
    
                    //title에 text를 포함하고 있는 post 구하기
                    const getTitle = getPost.filter((post) => {
                        return post.title.includes(text);
                    })
                    // console.log(getTitle);

                    if(getTitle){
                        return getTitle;
                    }else{
                        return null;
                    }
                    
                }else{
                    return null;
                }

            }catch (error){
                console.log(error);
                return null;
            }
        }
    }
}
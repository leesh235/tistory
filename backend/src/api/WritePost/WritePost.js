import { PrismaClient } from "@prisma/client";
import { isAuthenticated } from "../../utile";
import { SUCCESS, ERROR, SERVER_ERROR } from "../../constants/statusCode";
import { SUCCESS_WRITE_POST, NOT_EXIST_CATEGORY, ADDMIN_ERROR } from "../../constants/message";

const prisma = new PrismaClient();

export default {
    Mutation: {
        writePost: async (_, args, { request } ) => {
            try{
                
                const exist = isAuthenticated(request);
         
                if(exist){
                    const { categoryName, title } = args;
                    const { id } = request.user;

                    const author = await prisma.user.findUnique({
                        where: {
                            id
                        }
                    })
                   
                    if(author.role !== "ADMIN"){
                        return{
                            __typename: "WritePostFailure",
                            status: ERROR,
                            message: ADDMIN_ERROR
                        }
                    }

                    const category = await prisma.category.findUnique({
                        where:{
                            name: categoryName
                        }
                    })

                    if(!category){
                        return{
                            __typename: "WritePostFailure",
                            status: ERROR,
                            message: NOT_EXIST_CATEGORY
                        }
                    }
                   
                    const post = await prisma.post.create({
                        data: {
                            authorId: id,
                            categoryId: category.id,
                            title
                        }
                    })
              
                    return {
                        __typename: "WritePostSuccess",
                        status: SUCCESS,
                        message: SUCCESS_WRITE_POST,
                        data:{
                            id: post.id,
                            createAt: post.createAt,
                            category: category.name,
                            author: author.email
                        }
                    }

                }else{
                    return {
                        __typename: "WritePostFailure",
                        status: ERROR,
                        message: ADDMIN_ERROR
                    };
                }

            } catch (error){
                throw new Error(SERVER_ERROR);
            }
        }
    }
}
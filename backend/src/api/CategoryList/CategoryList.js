import { PrismaClient } from "@prisma/client";
import { isAuthenticated } from "../../utile"
import { SUCCESS, ERROR, SERVER_ERROR } from "../../constants/statusCode";
import { SUCCESS_GET_CATEGORY, NOT_EXIST_CATEGORY } from "../../constants/message";

const prisma = new PrismaClient();

export default {
    Query: {
        getCategoryList: async(_, args, {request}) => {
            try{
                const { skip } = args;

                const categoryList = await prisma.category.findMany({
                    skip,
                    where:{
                        parent: 0
                    },
                    orderBy: {
                        sequence: 'asc'
                    }
                });

                const subCategoryList = await prisma.category.findMany({
                    where:{
                        NOT: {
                            parent: 0
                        }
                    },
                    orderBy: {
                        sequence: 'asc'
                    }
                });

                if(categoryList.length === 0 && subCategoryList.length === 0){
                    return {
                        __typename: "CategoryListFailure",
                        status: ERROR,
                        message: NOT_EXIST_CATEGORY,
                    };
                }

                let arr = [];

                for(let i = 0; i < categoryList.length; i++){
                    let subArr = [];
                    for(let j = 0; j < subCategoryList.length; j++){
                        if(categoryList[i].id === subCategoryList[j].parent){
                            subArr.push({id:subCategoryList[j].id, name: subCategoryList[j].name})
                        }
                    }
                    arr.push({id:categoryList[i].id, name: categoryList[i].name, sub: subArr});         
                }

                return {
                    __typename: "CategoryListSuccess",
                    status: SUCCESS,
                    message: SUCCESS_GET_CATEGORY,
                    data: arr
                };


            }catch(error){
                throw new Error(SERVER_ERROR);
            }
        },
        getBagicCategoryList: async(_, args, {request}) => {
            try{
                const bagicCategoryList = await prisma.category.findMany({
                    skip: 2,
                    orderBy: {
                        sequence: 'asc'
                    },
                    select:{
                        id: true,
                        name: true
                    }
                });

                if(bagicCategoryList.length === 0){
                    return {
                        __typename: "BagicCategoryListFailure",
                        status: ERROR,
                        message: NOT_EXIST_CATEGORY,
                    };
                }

                return {
                    __typename: "BagicCategoryListSuccess",
                    status: SUCCESS,
                    message: SUCCESS_GET_CATEGORY,
                    data: bagicCategoryList
                };


            }catch(error){
                throw new Error(SERVER_ERROR);
            }
        }
    }
}
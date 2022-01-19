import { PrismaClient } from "@prisma/client";
import { isAuthenticated } from "../../utile"
import { SUCCESS, ERROR, SERVER_ERROR } from "../../constants/statusCode";
import { REQUIRED_LOGIN, SUCCESS_DELETE_CATEGORY, ADDMIN_ERROR, EXIST_CATEGORY_POST } from "../../constants/message";

const prisma = new PrismaClient();

export default {
    Mutation: {
        getCategoryList: async(_, args, {request}) => {
            try{
                const categoryList = await prisma.category.findMany({
                    where:{
                        parent: 0
                    }
                });

                const sub = await prisma.category.findMany({
                    
                })

            }catch(error){
                throw new Error(SERVER_ERROR);
            }
        }
    }
}
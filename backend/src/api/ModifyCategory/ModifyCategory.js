import { PrismaClient } from "@prisma/client";
import { isAuthenticated } from "../../utile"
import { SUCCESS, ERROR, SERVER_ERROR } from "../../constants/statusCode";
import { REQUIRED_LOGIN, SUCCESS_DELETE_CATEGORY, ADDMIN_ERROR, EXIST_CATEGORY_POST } from "../../constants/message";

const prisma = new PrismaClient();

export default {
    Mutation: {
        modifyCategory: async(_, args, {request}) => {
            try {
                const exist = isAuthenticated(request);
                
                if(exist){
                    const { id } = request.user;
                    const { name, categoryId } = args;
                    
                    const user = await prisma.user.findUnique({
                        where: { 
                            id
                        }
                    })
                    
                    if(user.role !== "ADMIN"){
                        return {
                            __typename: "DeleteCategoryFailure",
                            status: ERROR,
                            message: ADDMIN_ERROR
                        };
                    }

                    return {
                        __typename: "DeleteCategorySuccess",
                        status: SUCCESS,
                        message: SUCCESS_DELETE_CATEGORY,
                        data: {
                            name
                        }
                    };

                } else{
                    return {
                        __typename: "DeleteCategoryFailure",
                        status: ERROR,
                        message: REQUIRED_LOGIN
                    };
                }
            } catch(error) {
                throw new Error(SERVER_ERROR);
            }
        }
    }
}
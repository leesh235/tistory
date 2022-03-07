import { PrismaClient } from "@prisma/client";
import { isAuthenticated } from "../../utile"
import { SUCCESS, ERROR } from "../../constants/statusCode";
import { REQUIRED_LOGIN, SUCCESS_MODIFY_CATEGORY, ADDMIN_ERROR } from "../../constants/message";

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
                            __typename: "ModifyCategoryFailure",
                            status: ERROR,
                            message: ADDMIN_ERROR
                        };
                    }

                    const result = await prisma.category.update({
                        where: { 
                            id: categoryId
                        },
                        data: {
                            name
                        },
                        select:{
                            name: true
                        }
                    })

                    return {
                        __typename: "ModifyCategorySuccess",
                        status: SUCCESS,
                        message: SUCCESS_MODIFY_CATEGORY,
                        data: {
                            name: result.name
                        }
                    };

                } else{
                    return {
                        __typename: "ModifyCategoryFailure",
                        status: ERROR,
                        message: REQUIRED_LOGIN
                    };
                }
            } catch(error) {
                throw error;
            }
        }
    }
}
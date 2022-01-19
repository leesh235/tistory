import { PrismaClient } from "@prisma/client";
import { isAuthenticated } from "../../utile"
import { SUCCESS, ERROR, SERVER_ERROR } from "../../constants/statusCode";
import { REQUIRED_LOGIN, SUCCESS_WRITE_CATEGORY, ADDMIN_ERROR } from "../../constants/message";

const prisma = new PrismaClient();

export default {
    Mutation: {
        writeCategory: async(_, args, {request}) => {
            try {
                const exist = isAuthenticated(request);
                console.log(exist)
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
                            __typename: "WriteCategoryFailure",
                            status: ERROR,
                            message: ADDMIN_ERROR
                        };
                    }

                    const setCategoryId = 0;

                    if(categoryId !== null){
                        setCategoryId = categoryId;
                    }

                    const lastCategory = await prisma.category.findFirst({
                        where:{
                            parent: setCategoryId
                        },
                        orderBy:{
                            sequence: 'asc'
                        }
                    })
                    
                    console.log(lastCategory.depth)
                    //depth = parent의 depth + 1
                    //sequence = parent의 sequence 최댓값 + 1
                    //parnet = 해당 카테고리의 id
                    
                    await prisma.category.create({
                        data:{
                            name,
                            parent: setCategoryId,
                            sequence: lastCategory.sequence + 1,
                            depth: lastCategory.depth + 1
                        }
                    })

                    return {
                        __typename: "WriteCategorySuccess",
                        status: SUCCESS,
                        message: SUCCESS_WRITE_CATEGORY,
                        data: {
                            name
                        }
                    };

                } else{
                    return {
                        __typename: "WriteCategoryFailure",
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
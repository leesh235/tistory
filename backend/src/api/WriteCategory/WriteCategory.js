import { PrismaClient } from "@prisma/client";
import { isAuthenticated } from "../../utile"
import { SUCCESS, ERROR, SERVER_ERROR } from "../../constants/statusCode";
import { REQUIRED_LOGIN, SUCCESS_WRITE_CATEGORY, ADDMIN_ERROR, EXIST_CATEGORY } from "../../constants/message";

const prisma = new PrismaClient();

export default {
    Mutation: {
        writeCategory: async(_, args, {request}) => {
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
                            __typename: "WriteCategoryFailure",
                            status: ERROR,
                            message: ADDMIN_ERROR
                        };
                    }

                    const existCategory = await prisma.category.findFirst({
                        where:{
                            name
                        }
                    })

                    if(existCategory){
                        return {
                            __typename: "WriteCategoryFailure",
                            status: ERROR,
                            message: EXIST_CATEGORY
                        };
                    }
                    
                    const parentCategory = await prisma.category.findFirst({
                        where:{
                            id: categoryId
                        }
                    })
                   
                    const lastCategory = await prisma.category.findFirst({
                        where:{
                            parent: categoryId
                        },
                        orderBy:{
                            sequence: "desc"
                        }
                    })

                    //depth = parent의 depth + 1
                    //sequence = parent의 sequence 최댓값 + 1
                    //parnet = 해당 카테고리의 id *최상위 category parent = 0
                    let setSequence = lastCategory !== null ? lastCategory.sequence + 1 : 0;
                    let setDepth = parentCategory !== null ? parentCategory.depth +  1 : 0;

                    await prisma.category.create({
                        data:{
                            name,
                            parent: categoryId,
                            sequence: setSequence,
                            depth: setDepth
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
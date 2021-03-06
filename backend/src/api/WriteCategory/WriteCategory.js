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
                    const { name, parentCategoryName } = args;
                    
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

                    let parentCategory;
                    let lastCategory;

                    if(parentCategoryName !== ""){
                        parentCategory = await prisma.category.findFirst({
                            where:{
                                name: parentCategoryName
                            },
                            select:{
                                id: true,
                                parent: true
                            }
                        })

                        if(parentCategory.parent !== 0){
                            return {
                                __typename: "WriteCategoryFailure",
                                status: ERROR,
                                message: "?????? ??????????????? ?????? ???????????? ????????? ???????????????."
                            };
                        }

                        lastCategory = await prisma.category.findFirst({
                            where:{
                                parent: parentCategory.id
                            },
                            orderBy:{
                                sequence: "desc"
                            }
                        })

                        if(!lastCategory){
                            lastCategory = {
                                sequence: -1,
                                depth: 0,
                            }
                        }
                    }else{
                        parentCategory = null;
                        lastCategory = await prisma.category.findFirst({
                            where:{
                                parent: 0
                            },
                            orderBy:{
                                sequence: "desc"
                            }
                        })
                    }
                   

                    //depth = parent??? depth + 1
                    //sequence = parent??? sequence ????????? + 1
                    //parnet = ?????? ??????????????? id *????????? category parent = 0
                    let setSequence = lastCategory.sequence + 1;
                    let setDepth = lastCategory.depth +  1;
                    let setParent = parentCategory !== null ? parentCategory.id : 0;

                    const result = await prisma.category.create({
                        data:{
                            name,
                            parent: setParent,
                            sequence: setSequence,
                            depth: setDepth
                        },
                        select: {
                            name: true
                        }
                    })

                    return {
                        __typename: "WriteCategorySuccess",
                        status: SUCCESS,
                        message: SUCCESS_WRITE_CATEGORY,
                        data: {
                            name: result.name
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
                throw error;
            }
        }
    }
}
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

                if(exist){
                    const { id } = request.user;
                    const { name, parent, sequence, depth } = args;

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

                    await prisma.category.create({
                        data:{
                            name,
                            parent,
                            sequence,
                            depth
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
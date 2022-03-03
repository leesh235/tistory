import { PrismaClient } from "@prisma/client";
import { isAuthenticated } from "../../utile"
import { SUCCESS, ERROR, SERVER_ERROR } from "../../constants/statusCode";
import { SUCCESS_PROFILE, REQUIRED_LOGIN, EXIST_DELETE } from "../../constants/message";

const prisma = new PrismaClient();

export default {
    Query: {
        getProfile: async(_, __, {request}) => {
            try {
                const exist = isAuthenticated(request);

                if(exist){
                    const { id } = request.user;

                    const user = await prisma.user.findUnique({
                        where: { id }
                    })

                    if(user.deleteAt !== null){
                        return {
                            __typename: "ProfileFailure",
                            status: ERROR,
                            message: EXIST_DELETE
                        };
                    }

                    return {
                        __typename: "ProfileSuccess",
                        status: SUCCESS,
                        message: SUCCESS_PROFILE,
                        data: {
                            ...user
                        }
                    };

                } else{
                    return {
                        __typename: "ProfileFailure",
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
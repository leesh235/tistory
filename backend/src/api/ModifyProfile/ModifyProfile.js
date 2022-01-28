import { PrismaClient } from "@prisma/client";
import { isAuthenticated, generatPassword } from "../../utile";
import { SUCCESS, ERROR } from "../../constants/statusCode";
import { SUCCESS_MODIFY_PROFILE, REQUIRED_LOGIN } from "../../constants/message";

const prisma = new PrismaClient();

export default {
    Mutation: {
        modifyProfile: async (_, args, { request } ) => {
            try{
                
                const exist = isAuthenticated(request);
     
                if(exist){
                    const { nickName } = args;
                    const { id } = request.user;

                    let setData = {};

                    if(nickName !== ""){
                        setData = {
                            nickName,
                            modifyAt: new Date()
                        }
                    }else{
                        setData = {
                            modifyAt: new Date()
                        }
                    }

                    const result = await prisma.user.update({
                        where: {
                            id
                        },
                        data: setData,
                        select: {
                            id: true,
                            nickName: true,
                            modifyAt: true
                        }
                    })

                    return {
                        __typename: "ModifyProfileSuccess",
                        status: SUCCESS,
                        message: SUCCESS_MODIFY_PROFILE,
                        data: {
                            ...result
                        }
                    };                    

                }else{
                    return {
                        __typename: "ModifyProfileFailure",
                        status: ERROR,
                        message: REQUIRED_LOGIN
                    };
                }

            } catch (error){
                throw error;
            }
        }
    }
}
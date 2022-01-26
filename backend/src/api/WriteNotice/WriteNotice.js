import { PrismaClient } from "@prisma/client";
import { isAuthenticated } from "../../utile";
import { SUCCESS, ERROR } from "../../constants/statusCode";
import { SUCCESS_WRITE_NOTICE, ADDMIN_ERROR, REQUIRED_LOGIN } from "../../constants/message";

const prisma = new PrismaClient();

export default {
    Mutation: {
        writeNotice: async (_, args, { request } ) => {
            try{
                
                const exist = isAuthenticated(request);
         
                if(exist){
                    const { title, contents } = args;
                    const { id, role } = request.user;
                   
                    if(role !== "ADMIN"){
                        return{
                            __typename: "WriteNoticeFailure",
                            status: ERROR,
                            message: ADDMIN_ERROR
                        }
                    }

                    const notice = await prisma.notice.create({
                        data: {
                            title,
                            contents
                        }
                    })
              
                    return {
                        __typename: "WriteNoticeSuccess",
                        status: SUCCESS,
                        message: SUCCESS_WRITE_NOTICE,
                        data:{
                            id: notice.id,
                            title: notice.title,
                            contents: notice.contents,
                            createAt: notice.createAt
                        }
                    }

                }else{
                    return {
                        __typename: "WriteNoticeFailure",
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
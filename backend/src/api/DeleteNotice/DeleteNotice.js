import { PrismaClient } from "@prisma/client";
import { isAuthenticated } from "../../utile";
import { SUCCESS, ERROR } from "../../constants/statusCode";
import { SUCCESS_DELETE_NOTICELIST, ADDMIN_ERROR, REQUIRED_LOGIN, ALREADY_DELETE_NOTICE } from "../../constants/message";

const prisma = new PrismaClient();

export default {
    Mutation: {
        deleteNotice: async (_, args, { request } ) => {
            try{
                
                const exist = isAuthenticated(request);
         
                if(exist){
                    const { noticeId } = args;
                    const { id, role } = request.user;
                   
                    if(role !== "ADMIN"){
                        return{
                            __typename: "DeleteNoticeFailure",
                            status: ERROR,
                            message: ADDMIN_ERROR
                        }
                    }

                    const notice = await prisma.notice.findUnique({
                        where: {
                            id: noticeId
                        }
                    })

                    if(notice.deleteAt !== null){
                        return {
                            __typename: "DeleteNoticeFailure",
                            status: ERROR,
                            message: ALREADY_DELETE_NOTICE
                        };
                    }

                    const result = await prisma.notice.update({
                        where: {
                            id: noticeId
                        },
                        data: {
                            deleteAt: new Date()
                        }
                    })
              
                    return {
                        __typename: "DeleteNoticeSuccess",
                        status: SUCCESS,
                        message: SUCCESS_DELETE_NOTICELIST,
                        data:{
                            deleteAt: result.deleteAt
                        }
                    }

                }else{
                    return {
                        __typename: "DeleteNoticeFailure",
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
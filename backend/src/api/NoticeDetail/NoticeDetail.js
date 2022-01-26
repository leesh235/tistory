import { PrismaClient } from "@prisma/client";
import { SUCCESS, ERROR } from "../../constants/statusCode";
import { SUCCESS_GET_NOTICE, NOT_EXIST_NOTICE } from "../../constants/message";

const prisma = new PrismaClient();

export default {
    Query: {
        getNoticeDetail: async(_, args, {request}) => {
            try{

                const { noticeId } = args;

                const notice = await prisma.notice.findFirst({
                    where: {
                        AND: [
                            {
                                id: noticeId
                            },
                            {
                                deleteAt: null
                            }
                        ]
                    },
                    select: {
                        id: true,
                        title: true,
                        contents: true,
                        createAt: true
                    }
                })

                if(notice === null){
                    return {
                        __typename: "NoticeDetailFailure",
                        status: ERROR,
                        messgae:NOT_EXIST_NOTICE
                    };
                }
                
                return {
                    __typename: "NoticeDetailSuccess",
                    status: SUCCESS,
                    message: SUCCESS_GET_NOTICE,
                    data: {
                        id: notice.id,
                        title: notice.title,
                        contents: notice.contents,
                        createAt: notice.createAt
                    }
                };

            }catch(error){
                throw error;
            }
        }
    }
}
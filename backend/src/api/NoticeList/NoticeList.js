import { PrismaClient } from "@prisma/client";
import { SUCCESS, ERROR } from "../../constants/statusCode";
import { SUCCESS_GET_NOTICELIST, NOT_EXIST_NOTICELIST } from "../../constants/message";

const prisma = new PrismaClient();

export default {
    Query: {
        getNoticeList: async(_,args) => {
            try {
                const { count, page } = args;

                //전체 공지사항 수
                const totalNotice = await prisma.notice.findMany({
                    where: {
                        deleteAt: null
                    },
                    select: {
                        id: true,
                    }
                });

                const NoticeLen = totalNotice.length;

                if(NoticeLen === 0){
                    return {
                        __typename: "NoticeListFailure",
                        status: ERROR,
                        message:NOT_EXIST_NOTICELIST
                    };
                }

                //해당 페이지의 공지사항 배열
                const noticeList = await prisma.notice.findMany({
                    where: {
                        deleteAt: null
                    },
                    skip: (page - 1) * count,
                    take: count,
                    orderBy: {
                        createAt: "desc"
                    },
                    select: {
                        id: true,
                        title: true,
                        contents: true,
                        createAt: true,
                    }
                })

                const result = {
                    notice: noticeList,
                    noticeQuantity: NoticeLen
                }

                return {
                    __typename: "NoticeListSuccess",
                    status: SUCCESS,
                    message: SUCCESS_GET_NOTICELIST,
                    data: result
                };

            }catch (error){
                throw error;
            }
        }
    }
}
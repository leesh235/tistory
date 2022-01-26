import { PrismaClient } from "@prisma/client";
import { isAuthenticated } from "../../utile";
import { SUCCESS, ERROR } from "../../constants/statusCode";
import { SUCCESS_MODIFY_NOTICELIST, REQUIRED_INPUT, ADDMIN_ERROR, REQUIRED_LOGIN, ALREADY_DELETE_NOTICE } from "../../constants/message";

const prisma = new PrismaClient();

export default {
    Mutation: {
        modifyNotice: async (_, args, { request } ) => {
            try{
                
                const exist = isAuthenticated(request);
         
                if(exist){
                    const { noticeId, title, contents } = args;
                    const { id, role } = request.user;
                   
                    if(role !== "ADMIN"){
                        return{
                            __typename: "ModifyNoticeFailure",
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
                            __typename: "ModifyNoticeFailure",
                            status: ERROR,
                            message: ALREADY_DELETE_NOTICE
                        };
                    }

                    let setDate = {};

                    if(title === "" && contents === ""){
                        return{
                            __typename: "ModifyNoticeFailure",
                            status: ERROR,
                            message: REQUIRED_INPUT
                        }
                    }else if(title === "" && contents !== ""){
                        setDate = {
                            contents: contents,
                            modifyAt: new Date()
                        }
                    }else if(title !== "" && contents === ""){
                        setDate = {
                            title: title,
                            modifyAt: new Date()
                        }
                    }else{
                        setDate = {
                            title: title,
                            contents: contents,
                            modifyAt: new Date()
                        }
                    }
                    
                    const result = await prisma.notice.update({
                        where: {
                            id: noticeId
                        },
                        data: setDate
                    })
              
                    return {
                        __typename: "ModifyNoticeSuccess",
                        status: SUCCESS,
                        message: SUCCESS_MODIFY_NOTICELIST,
                        data:{
                            id: result.id,
                            title: result.title,
                            contents: result.contents,
                            modifyAt: result.modifyAt
                        }
                    }

                }else{
                    return {
                        __typename: "ModifyNoticeFailure",
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
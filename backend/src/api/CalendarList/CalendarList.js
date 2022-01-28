import { PrismaClient } from "@prisma/client";
import { SUCCESS, ERROR } from "../../constants/statusCode";
import { SUCCESS_GET_CALENDARLIST } from "../../constants/message";

const prisma = new PrismaClient();

export default {
    Query: {
        getCalendarList: async(_, args) => {
            try{
            
                return {
                    __typename: "CalendarListSuccess",
                    status: SUCCESS,
                    message: SUCCESS_GET_CALENDARLIST,
                    data: []
                };

            }catch(error){
                throw error;
            }
        }
    }
}
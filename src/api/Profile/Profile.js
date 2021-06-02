import { PrismaClient } from "@prisma/client";
import { isAuthenticated } from "../../utile"

const prisma = new PrismaClient();

export default {
    Query: {
        getProfile: async(_, __, {request}) => {
            try {

                const exist = isAuthenticated(request);

                if(exist){
                    const id = request.user.id;
                    const user = await prisma.user.findUnique({
                        where: { id }
                    })

                    if(user){
                        return user;
                    }else{
                        throw Error("Invalid access")
                    }

                } else{
                    return null;
                }

            } catch(error) {
                console.log(error);
                return null;
            }
        }
    }
}
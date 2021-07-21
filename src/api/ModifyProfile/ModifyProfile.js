import { PrismaClient } from "@prisma/client";
import { isAuthenticated, generatPassword } from "../../utile"

const prisma = new PrismaClient();

export default {
    Mutation: {
        ModifyProfile: async (_, args, { request } ) => {
            try{
                
                const exist = isAuthenticated(request);
                console.log(request.user);
                if( exist === true ){
                    const { password } = args;
                    const id = request.user.id;
                    console.log(password);

                    if(password !== undefined && password !== null){
                        await prisma.user.update({
                            where:{
                                id
                            },
                            data: {
                                password:generatPassword(password)
                            }
                        })

                        return true;
                    } else{
                        console.log("비밀번호 변경을 하지 않았습니다.")
                        return false;
                    }

                }else{
                    console.log("You need to log in to perform this action1");
                    return false;
                }

            } catch (error){
                console.log(error);
                return false;
            }
        },
        ModifyUserImg: async(_, args, { request } ) => {
            try{

                const exist = isAuthenticated(request);

                if( exist === true ){
                
                    const { userImg } = args;
                    const id = request.user.id;
                    console.log(userImg)
                    const data = await prisma.user.update({
                        where:{
                            id
                        },
                        data: {
                            userImgId: id + "_profileImg"
                        }
                    })

                    console.log(data)
                    console.log(id + "_profileImg")
                    return {userImgId:id + "_profileImg"};

                }else{
                    console.log("You need to log in to perform this action2");
                    return {userImgId:""};
                }

            } catch (error){
                console.log(error);
                return {userImgId:""};
            }
        }
    }
}
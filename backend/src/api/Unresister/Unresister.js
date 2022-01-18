import { PrismaClient } from "@prisma/client";
import { isAuthenticated, generatPassword } from "../../utile";
import { SUCCESS, ERROR, SERVER_ERROR } from "../../constants/statusCode";
import { REQUIRED_INPUT, REQUIRED_LOGIN, PASSWORD_ERROR, SUCCESS_UNREGISTER, EXIST_DELETE } from "../../constants/message";

const prisma = new PrismaClient();

export default {
    Mutation: {
        unresister: async(_, args, {request}) => {
            try{
                const exist = isAuthenticated(request);
         
                if(exist){
                    const { password } = args;
                    const id = request.user.id;

                    const user = await prisma.user.findUnique({
                        where:{
                            id
                        }
                    })

                    //빈칸 여부
                    if(password === ""){
                        return {
                            __typename: "UnresisterFailure",
                            status: ERROR,
                            message: REQUIRED_INPUT
                        };
                    }

                    //비밀번호 오류
                    if(user.password !== generatPassword(password)){
                        return {
                            __typename: "UnresisterFailure",
                            status: ERROR,
                            message: PASSWORD_ERROR
                        };
                    }
          
                    //이미 탈퇴한 이메일
                    if(user.deleteAt !== null){
                        return {
                            __typename: "UnresisterFailure",
                            status: ERROR,
                            message: EXIST_DELETE
                        };
                    }
                    
                    await prisma.comment.updateMany({
                        where: {
                            userId: id
                        },
                        data: {
                            deleteAt: new Date()
                        }
                    });
                    //작성한 게시글 모두 삭제
                    await prisma.post.updateMany({
                        where: {
                            authorId: id
                        },
                        data: {
                            deleteAt: new Date()
                        }
                    });
                    //회원탈퇴
                    const userDeleteAt = await prisma.user.update({
                        where:{
                            id
                        },
                        data: {
                            deleteAt: new Date()
                        }
                    });
    
                    return {
                        __typename: "UnresisterSuccess",
                        status: SUCCESS,
                        message: SUCCESS_UNREGISTER,
                        data: {
                            deleteAt: userDeleteAt.deleteAt
                        }
                    };
                }else{
                    return {
                        __typename: "UnresisterFailure",
                        status: ERROR,
                        message: REQUIRED_LOGIN
                    };
                }
            }catch(err){
                throw new Error(SERVER_ERROR);
            }
        }
    }
}
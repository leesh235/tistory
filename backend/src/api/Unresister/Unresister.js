import { PrismaClient } from "@prisma/client";
import { isAuthenticated, generatPassword } from "../../utile";

const prisma = new PrismaClient();

export default {
    Mutation: {
        Unresister: async(_, args, {request}) => {
            try{
                const exist = isAuthenticated(request);
                console.log(exist)
                if(exist){
                    const { password } = args;
                    const id = request.user.id;

                    const user = await prisma.user.findUnique({
                        where:{
                            id
                        }
                    })

                    //비밀번호 오류
                    if(user.password !== generatPassword(password)){
                        return {
                            status: 409,
                            message: "비밀번호가 틀렸습니다",
                            data: {}
                        };
                    }
                    //회원탈퇴
                    else{
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
                        const user = await prisma.user.update({
                            where:{
                                id
                            },
                            data: {
                                deleteAt: new Date()
                            }
                        });
                        console.log(user)
                        return {
                            status: 200,
                            message: "회원탈퇴 완료",
                            data: {
                                deleteAt: user.deleteAt
                            }
                        };
                    }

                }else{
                    return {
                        status: 401,
                        message: "로그인이 필요합니다.",
                        data: {}
                    };
                }
            }catch(err){
                console.log("err: ",err);
                return {
                    status: 500,
                    message: "server error",
                    data: {}
                };
            }
        }
    }
}
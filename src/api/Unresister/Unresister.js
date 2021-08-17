import { PrismaClient } from "@prisma/client";
import { isAuthenticated, generatPassword } from "../../utile";

const prisma = new PrismaClient();

export default {
    Mutation: {
        Unresister: async(_, args, {request}) => {
            try{
                const exist = isAuthenticated(request);

                if(exist){
                    const { email, password } = args;
                    const userId = request.user.userId;

                    const userInfo = await prisma.user.findUnique({
                        where:{
                            email
                        }
                    })

                    //토큰 정보와 로그인 정보가 다름
                    if(userInfo.userId !== userId){
                        return {
                            check: false,
                            status: "잘못된 접근 방법"
                        };
                    }
                    //비밀번호 오류
                    else if(userInfo.password !== generatPassword(password)){
                        return {
                            check: false,
                            status: "비밀번호가 다릅니다"
                        };
                    }
                    //회원탈퇴
                    else{
                        //작성한 게시글 모두 삭제
                        await prisma.post.deleteMany({
                            where: {
                                writer: userId
                            }
                        });
                        //회원탈퇴
                        await prisma.user.delete({
                            where:{
                                userId
                            }
                        });

                        return {
                            check: true,
                            status: "회원탈퇴 완료"
                        };
                    }

                }else{
                    return {
                        check: false,
                        status: "로그인이 필요합니다."
                    };
                }
            }catch(err){
                console.log("err: ",err);
                return {
                    check: false,
                    status: "server error"
                };
            }
        }
    }
}
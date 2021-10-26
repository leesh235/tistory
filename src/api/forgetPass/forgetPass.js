import { PrismaClient } from "@prisma/client";
import { generatPassword, randomPassword, transport } from "../../utile";

const prisma = new PrismaClient();

export default {
    Mutation: {
        forgetPass: async (_, args) => {
            try{

                const { email } =args;

                if(email === ""){
                    return {
                        check: false,
                        status: "not input email"
                    };
                }else{
                    const exist = await prisma.user.findUnique({
                        where: {
                            email
                        }
                    })
    
                    if(exist === null){
                        return {
                            check: false,
                            status: "Is not sign up"
                        };
                    }else{
                        const newPassword = randomPassword();
        
                        console.log(newPassword);
        
                        const hashedNewPass = generatPassword(newPassword);
        
                        transport.sendMail({
                            from: `tistory <tistorylsh@gmail.com>`,
                            to: email,
                            subject: "새로운 비밀번호입니다.",
                            text: `${newPassword}`,
                            html:`
                                <div style="text-align: center;">
                                <h3 style="color: #505050">NEW PASSWORD</h3>
                                <br />
                                <p>${newPassword}</p>
                                </div>
                            `
                        })
                        .then(
                            await prisma.user.update({
                                where: {
                                    email
                                },
                                data: {
                                    password: hashedNewPass
                                }
                            })
                        )
        
                        return {
                            check: true,
                            status: "success, try log in"
                        };

                    }
                }
            }catch(error){
                console.log(error);
                return {
                    check: false,
                    status: "error"
                };
            }
        }
    }
};
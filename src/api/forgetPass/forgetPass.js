import { PrismaClient } from "@prisma/client";
import { generatPassword, randomPassword, transport } from "../../utile";

const prisma = new PrismaClient();

export default {
    Mutation: {
        forgetPass: async (_, args) => {
            try{

                const { email } =args;

                if(email === ""){
                    return false;
                }

                const exist = await prisma.user.findUnique({
                    where: {
                        email
                    }
                })

                if(exist === null){
                    return false;
                }

                const newPassword = randomPassword();

                console.log(newPassword);

                const hashedNewPass = generatPassword(newPassword);

                // transport.sendMail({
                //     from: `tistory <tistorylsh@gmail.com>`,
                //     to: email,
                //     subject: "새로운 비밀번호입니다.",
                //     html:`
                //         <div style="text-align: center;">
                //         <h3 style="color: #505050">NEW PASSWORD</h3>
                //         <br />
                //         <p>${newPassword}</p>
                //         </div>
                //     `
                // })

                await prisma.user.update({
                    where: {
                        email
                    },
                    data: {
                        password: hashedNewPass
                    }
                })

                return true;

            }catch(error){
                console.log(error);
                return false;
            }
        }
    }
};
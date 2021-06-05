import crypto from "crypto";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

//middleware function
export const isAuthenticated = request => {
    try {

        const user = request.user;
        // console.log(user)
        if (user === undefined || user === null) {
            return false;
        }else{
            return true;
        }

    } catch(error) {
        console.log(error);
        return false;
    }
};

//jwt
export const generatToken = (id) => {
    const token = jwt.sign({id}, process.env.JWT_SECRET);
    return token;
}

//passord 해쉬화
export const generatPassword = (password) => {
    const salt = process.env.SALT;
    const hashedPassword = crypto.createHmac("sha256", salt).update(password).digest("hex");
    return hashedPassword;
}

//password frond hashe화

//password 정규식표현 체크
export const checkPassword = (password) => {
    var regex = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
    if(!regex.test(password)){
        return false;
    }
    return true;
}

//random password 생성
export const randomPassword = () => {
    const key ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let result = "";
    const len = key.length;

    while(!checkPassword(result)){
        for(let i = 0; i < 10; i++){
            result += key.charAt(
                Math.floor(Math.random() * len)
            )
        }
    }

    return result;
}

//해당 email로 메일보내기
export const transport = nodemailer.createTransport({
    service: "gmail",
    host: "stmp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS
    }
})
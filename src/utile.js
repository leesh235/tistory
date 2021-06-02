import crypto from "crypto";
import jwt from "jsonwebtoken";

//middleware function
export const isAuthenticated = request => {
    try {

        // console.log(request.user);
        const user = request.user;
        if (user !== undefined || user !== null) {
          return true;
        }else{
            throw Error("You need to log in to perform this action");
        }

    } catch(error) {
        console.log(error);
        return false;
    }
};

//passord 해쉬화
export const generatPassword = (password) => {
    const salt = process.env.SALT;
    const hashedPassword = crypto.createHmac("sha256", salt).update(password).digest("hex");
    return hashedPassword;
}

//jwt
export const generatToken = (id) => {
    const token = jwt.sign({id}, process.env.JWT_SECRET);
    return token;
}
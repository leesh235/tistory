import crypto from "crypto";
import jwt from "jsonwebtoken";

//middleware function
export const isAuthenticated = request => {
    console.log(request.user);
    if (!request.user) {
      throw Error("You need to log in to perform this action");
    }
    return true;
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
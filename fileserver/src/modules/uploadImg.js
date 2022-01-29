import { MODIFYUSERIMAGE, EDITOR } from "./query.js";
import  { makeClient }  from "../client.js";

export const profileToDB = async(req, filename) => {
    const client = makeClient(req.headers.authorization);
    return await client.mutate({
        mutation: MODIFYUSERIMAGE,
        variables: {
            imageUrl: process.env.FILESERVER + "/" + req.body.email + "/" + filename
        }
    });
};

export const postContentsToDB = async(req) => {
    const client = makeClient(req.headers.authorization);
    return await client.mutate({
        mutation: EDITOR,
        variables: {
            postId: req.body.postId,
            contentsUrl: process.env.FILESERVER + "/" + req.body.email + "/" + filename
        }
    });
};
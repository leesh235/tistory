import { MODIFYUSERIMAGE, EDITOR } from "./query.js";
import  { makeClient }  from "../client.js";

export const profileToDB = async(req) => {
    const client = makeClient(req.headers.authorization);
    return await client.mutate({
        mutation: MODIFYUSERIMAGE,
        variables: {
            imageUrl: ""
        }
    });
};

export const postContentsToDB = async(req) => {
    const client = makeClient(req.headers.authorization);
    return await client.mutate({
        mutation: EDITOR,
        variables: {
            postId: req.body.postId,
            contentsUrl: ""
        }
    });
};
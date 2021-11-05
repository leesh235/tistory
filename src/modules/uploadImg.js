import { MODIFYUERIMG, MODIFYPOSTIMG, UPLOADTEXT } from "./query.js";
import  {makeClient}  from "../client.js";

export const profileToDB = async(req) => {
    const client = makeClient(req.headers.authorization);
    return await client.mutate({
        mutation: MODIFYUERIMG,
        variables: {
            userImg: req.body.user
        }
    });
};

export const postContentsToDB = async(req) => {
    const client = makeClient(req.headers.authorization);
    return await client.mutate({
        mutation: UPLOADTEXT,
        variables: {
            postId: Number(req.body.postId)
        }
    });
};
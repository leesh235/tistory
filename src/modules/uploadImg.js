import { MODIFYUERIMG, MODIFYPOSTIMG } from "./query.js";
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

export const postToDB = async(req) => {
    const client = makeClient(req.headers.authorization);
    return await client.mutate({
        mutation: MODIFYPOSTIMG,
        variables: {
            postImg: req.body.user
        }
    });
};
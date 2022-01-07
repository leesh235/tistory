import { MODIFYUERIMG, MODIFYPOSTIMG, UPLOADTEXT } from "./query.js";
import  {makeClient}  from "../client.js";

export const profileToDB = async(req) => {
    const client = makeClient(req.headers.authorization);
    if(req.body.streamfile !== ""){
        return await client.mutate({
            mutation: MODIFYUERIMG,
            variables: {
                userImg: true
            }
        });
    }else{
        return await client.mutate({
            mutation: MODIFYUERIMG,
            variables: {
                userImg: false
            }
        });
    }
};

export const postContentsToDB = async(req) => {
    const client = makeClient(req.headers.authorization);
    return await client.mutate({
        mutation: UPLOADTEXT,
        variables: {
            postId: req.body.postId
        }
    });
};
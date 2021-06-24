import { MODIFYUERIMG } from "./query";
import { makeClient } from "../client";

const profileToDB = async({req}) => {
    const client = makeClient(req.headers.authorization);
    console.log(req.headers.authorization);
    return await client.mutate({
        mutation: MODIFYUERIMG,
        variables: {
            userImg: req.body.userImg
        }
    });
};

export default profileToDB;
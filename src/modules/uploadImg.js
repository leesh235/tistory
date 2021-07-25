import { MODIFYUERIMG, MODIFYPOSTIMG } from "./query.js";
import  {makeClient}  from "../client.js";

//front에서 formdata로 userId를 넘겨 받아서
//백엔드로 정보를 보내 image를 유무를 판단하게한다
//post는 생성당시의 postId가 없기때문에 userId와 작성post의
//갯수를 사용하면 좋은듯
//또한 aws를 이용하여 image저장 방법 생각해보기
export const profileToDB = async(req) => {
    // console.log("token: ", req.headers.authorization);
    // console.log("userId: ", req.body.user);
    const client = makeClient(req.headers.authorization);
    return await client.mutate({
        mutation: MODIFYUERIMG,
        variables: {
            userImg: req.body.user
        }
    });
};

export const postToDB = async(req) => {
    // console.log("token: ", req.headers.authorization);
    // console.log("userId: ", req.body.user);
    const client = makeClient(req.headers.authorization);
    return await client.mutate({
        mutation: MODIFYPOSTIMG,
        variables: {
            postImg: req.body.post
        }
    });
};
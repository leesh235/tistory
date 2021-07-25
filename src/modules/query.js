import { gql } from "@apollo/client";

export const MODIFYUERIMG = gql`
    mutation ModifyUserImg($userImg: String){
        ModifyUserImg(userImg: $userImg){
            userImgId
        }
    }
`;

export const MODIFYPOSTIMG = gql`
    mutation ModifyUserImg($postImg: String){
        ModifyUserImg(postImg: $userImg){
            postImgId
        }
    }
`;
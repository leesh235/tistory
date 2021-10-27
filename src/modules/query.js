import { gql } from "@apollo/client";

export const MODIFYUERIMG = gql`
    mutation ModifyUserImg($userImg: String){
        ModifyUserImg(userImg: $userImg){
            userImgId
        }
    }
`;

export const UPLOADTEXT = gql`
    mutation uploadText($postId: String){
        uploadText(postId: $postId){
            check
            status
        }
    }
`;
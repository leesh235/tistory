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
        ModifyPostImg(postImg: $postImg){
            postImgId
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
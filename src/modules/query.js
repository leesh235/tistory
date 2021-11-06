import { gql } from "@apollo/client";

export const MODIFYUERIMG = gql`
    mutation ModifyUserImg($userImg: String){
        ModifyUserImg(userImg: $userImg){
            userImg
        }
    }
`;

export const UPLOADTEXT = gql`
    mutation uploadText($postId: Int){
        uploadText(postId: $postId){
            check
            status
        }
    }
`;
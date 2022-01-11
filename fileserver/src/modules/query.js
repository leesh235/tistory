import { gql } from "@apollo/client";

export const MODIFYUERIMG = gql`
    mutation ModifyUserImg($userImg: Boolean){
        ModifyUserImg(userImg: $userImg){
            check
            status
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
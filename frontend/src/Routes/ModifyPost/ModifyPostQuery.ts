import { gql } from "@apollo/client";

export const MODIFYPOST = gql`
    mutation ModifyPost($postId: Int!, $title: String!){
        ModifyPost(postId: $postId, title: $title){
            check
            status
        }
    }
`;
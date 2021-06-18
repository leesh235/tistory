import { gql } from "@apollo/client";

export const MODIFYPOST = gql`
    mutation ModifyPost($postId: String!, $title: String!, $contents: String){
        ModifyPost(postId: $postId, title: $title, contents: $contents)
    }
`;
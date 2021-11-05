import { gql } from "@apollo/client";

export const ADD = gql`
mutation createPost($title: String!, $contents: Boolean){
    createPost(title: $title, contents: $contents){
        postInfo{
            postId
            writer
        }
        check
        status
    }
}
`;
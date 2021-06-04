import { gql } from '@apollo/client';

export const DETAIL = gql`
    query getPost($postId: String){
        getPost(postId: $postId){
            id
            contents
            title
            createdAt
        }
    }
`;
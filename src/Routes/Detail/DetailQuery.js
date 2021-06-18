import { gql } from '@apollo/client';

export const DETAIL = gql`
    query getPost($postId: String!, $id: String!){
        getPost(postId: $postId, id: $id){
            equal
            Post{
                id
                contents
                title
                createdAt
            }
        }
    }
`;
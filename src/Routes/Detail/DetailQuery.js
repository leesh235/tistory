import { gql } from '@apollo/client';

export const DETAIL = gql`
    query getPostDetail($postId: String!, $email: String!){
        getPostDetail(postId: $postId, email: $email){
            equal
            status
            Post{
                postId
                writer
                title
                contents
                createdAt
                postImgId
            }
        }
    }
`;

export const DELETEPOST = gql`
    mutation DeletePost($postId: String!){
        DeletePost(postId: $postId){
            check
            status
        }
    }
`;
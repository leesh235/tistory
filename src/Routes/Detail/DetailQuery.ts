import { gql } from '@apollo/client';

export const DETAIL = gql`
    query getPostDetail($postId: Int!){
        getPostDetail(postId: $postId){
            equal
            check
            status
            Post{
                postId
                writer
                title
                contents
                createdAt
            }
        }
    }
`;

export const DELETEPOST = gql`
    mutation DeletePost($postId: Int!){
        DeletePost(postId: $postId){
            check
            status
        }
    }
`;
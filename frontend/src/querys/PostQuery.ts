import { gql } from '@apollo/client';

export const POST = gql`
    query getPostDetail($postId: Int!){
        getPostDetail(postId: $postId){
            ...on PostSuccess{
                status
                message
                data{
                    id
                    title
                    contentsUrl
                    author
                    createAt
                    hits
                    category
                }
            }
            ...on PostFailure{
                status
                message
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
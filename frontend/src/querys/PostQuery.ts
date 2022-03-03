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
    mutation deletePost($postId: Int!){
        deletePost(postId: $postId){
            ...on DeletePostSuccess{
                status
                message
                data{
                    id
                    deleteAt
                }
            }
            ...on DeletePostFailure{
                status
                message
            }
        }
    }
`;
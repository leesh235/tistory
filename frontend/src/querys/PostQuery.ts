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

export const POSTLIST = gql`
    query getPostList($categoryId: Int!, $count: Int!, $page: Int!){
        getPostList(categoryId: $categoryId, count: $count, page: $page){
            ... on PostListSuccess{
                status
                message
                data{
                    posts{
                        postId
                        author
                        title
                        createAt
                        hits
                        thumbnail
                    }
                    postsQuantity
                }
            }
            ... on PostListFailure{
                status
                message
            }
        }
    }
`;

export const WRITEPOST =gql`
    mutation writePost($categoryName: String!, $title: String!){
        writePost(categoryName: $categoryName, title: $title){
            ...on WritePostSuccess{
                status
                message
                data{
                    id
                    category
                    author
                    createAt
                }
            } 
            ...on WritePostFailure{
                status
                message
            }
        }
    }
`;

export const MODIFYPOST = gql`
    mutation modifyPost($postId: Int!, $title: String){
        modifyPost(postId: $postId, title: $title){
            ...on ModifyPostSuccess{
                status
                message
                data{
                    title
                    modifyAt
                }
            }
            ...on ModifyPostFailure{
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
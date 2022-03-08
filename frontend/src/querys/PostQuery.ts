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

export const SEARCH = gql`
    query getSearch($text: String, $count: Int!, $page: Int!){
        getSearch(text: $text, count: $count, page: $page){
            ...on SearchSuccess{
                status
                message
                data{
                    search{
                        postId
                        author
                        title
                        createAt
                        hits
                        thumbnail    
                    }
                    searchQuantity
                }
            }
            ...on SearchFailure{
                status
                message
            }
        }
    }
`;
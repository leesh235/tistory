import { gql } from "@apollo/client";

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
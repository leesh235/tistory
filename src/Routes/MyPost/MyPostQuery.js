import { gql } from "@apollo/client";

export const MYPOST = gql`
    query getMyPosts($count: Int!, $page: Int!){
        getMyPosts(count: $count, page: $page){
            status
            postCnt
            allMyPosts{
                postId
                writer
                title
                createdAt
            }
        }
    }
`;
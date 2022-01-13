import { gql } from "@apollo/client";

export const POSTLIST = gql`
    query getAllPosts($count: Int!, $page: Int!){
        getAllPosts(count: $count, page: $page){
            status
            postCnt
            posts{
                postId
                writer
                title
                createdAt
            }
        }
    }
`;
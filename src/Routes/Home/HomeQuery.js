import { gql } from "@apollo/client";

export const POST = gql`
    query getAllPosts($count: Int!, $page: Int!){
        getAllPosts(count: $count, page: $page){
            status
            posts{
                postId
                writer
                title
                createdAt
            }
        }
    }
`;
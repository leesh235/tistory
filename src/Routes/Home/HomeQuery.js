import { gql } from "@apollo/client";

export const POST = gql`
    query getAllPosts{
        getAllPosts{
            id
            title
            postId
            createdAt
        }
    }
`;
import { gql } from "@apollo/client";

export const POST = gql`
    query {
        getAllPosts{
            id
            title
            postId
            createdAt
        }
    }
`;
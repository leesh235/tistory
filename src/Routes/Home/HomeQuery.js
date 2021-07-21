import { gql } from "@apollo/client";

export const POST = gql`
    query {
        getAllPosts{
            postId
            title
            id
            createdAt
        }
    }
`;
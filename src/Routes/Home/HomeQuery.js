import { gql } from "@apollo/client";

export const POST = gql`
    query getAllPosts{
        getAllPosts{
            posts{
                id
                title
                postId
                createdAt
            }
        }
    }
`;
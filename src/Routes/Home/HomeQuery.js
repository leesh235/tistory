import { gql } from "@apollo/client";

export const POST = gql`
    query{
        getAllPosts{
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
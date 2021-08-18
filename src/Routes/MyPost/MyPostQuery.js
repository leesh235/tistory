import { gql } from "@apollo/client";

export const MYPOST = gql`
    query{
        getMyPosts{
            status
            allMyPosts{
                postId
                writer
                title
                createdAt
            }
        }
    }
`;
import { gql } from "@apollo/client";

export const MYPOST = gql`
    query{
        getMyPosts{
            postId
            title
            id
            createdAt
        }
    }
`;
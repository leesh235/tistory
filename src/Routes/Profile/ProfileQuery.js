import { gql } from "@apollo/client";

export const PROFILE = gql`
    query{
        getProfile{
            userId
            email
            userImgId
        }
    }
`;
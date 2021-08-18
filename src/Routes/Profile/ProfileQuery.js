import { gql } from "@apollo/client";

export const PROFILE = gql`
    query{
        getProfile{
            email
            nickName
            userRole:
            userImgId
            status
        }
    }
`;
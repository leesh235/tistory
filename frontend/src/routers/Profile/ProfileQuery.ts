import { gql } from "@apollo/client";

export const PROFILE = gql`
    query{
        getProfile{
            user {
                email
                nickName
                userRole
                userImg
            }
            check
            status
        }
    }
`;
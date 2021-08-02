import { gql } from "@apollo/client";

export const UNRESISTER = gql`
    mutation Unresister($userId: String!, $password: String!){
        Unresister(userId: $userId, password: $password)
    }
`;
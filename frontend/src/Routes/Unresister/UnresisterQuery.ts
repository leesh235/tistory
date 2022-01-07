import { gql } from "@apollo/client";

export const UNRESISTER = gql`
    mutation Unresister($email: String!, $password: String!){
        Unresister(email: $email, password: $password){
            check
            status
        }
    }
`;
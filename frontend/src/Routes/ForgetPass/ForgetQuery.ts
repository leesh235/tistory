import { gql } from "@apollo/client";

export const FORGET_PASS = gql`
    mutation forgetPass($email: String!){
        forgetPass(email: $email){
            check
            status
        }
    }
`;
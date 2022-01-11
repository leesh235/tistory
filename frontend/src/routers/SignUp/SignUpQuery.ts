import { gql } from "@apollo/client";

export const SIGNUP = gql`
mutation signUp($email: String!, $nickName: String!, $password: String!){
    signUp(email: $email, nickName: $nickName, password: $password){
        check
        status
    }
}
`;
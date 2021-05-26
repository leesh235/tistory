import { gql } from '@apollo/client';

export const LOGIN =gql`
    mutation login($email: String!, $password: String!){
        login(email: $email, password: $password)
    }
`;

export const TOKENLOGIN = gql`
    mutation logUserIn($token: String!){
        logUserIn(token: $token) @client
    }
`;
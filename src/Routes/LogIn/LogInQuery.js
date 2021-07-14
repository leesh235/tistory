import { gql } from '@apollo/client';

export const LOGIN =gql`
    mutation login($userId: String!, $password: String!){
        login(userId: $userId, password: $password){
            userId
            token
        }
    }
`;

export const TOKENLOGIN = gql`
    mutation userLogIn($token: String!){
        userLogIn(token: $token) @client
    }
`;
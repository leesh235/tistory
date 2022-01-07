import { gql } from '@apollo/client';

export const LOGIN =gql`
    mutation login($email: String!, $password: String!){
        login(email: $email, password: $password){
            status
            check
            user{
                email
                nickName
                userRole
                token
            }
        }
    }
`;

export const TOKENLOGIN = gql`
    mutation userLogIn($token: String!){
        userLogIn(token: $token) @client
    }
`;
import { gql } from '@apollo/client';

export const LOGIN =gql`
    mutation login($email: String!, $password: String!){
        login(email: $email, password: $password){
            ...on LogInSuccess{
                status
                message
                data{
                    email
                    nickName
                    role
                    token
                }
            } 
            ...on LogInFailure{
                status
                message
            }
        }
    }
`;

export const TOKENLOGIN = gql`
    mutation userLogIn($token: String!){
        userLogIn(token: $token) @client
    }
`;
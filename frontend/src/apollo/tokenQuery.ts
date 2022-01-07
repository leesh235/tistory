import { gql } from "@apollo/client";

export const TOKENINFO = gql`
query{
    isLoggedIn @client
}
`;

export const TOKENLOGOUT = gql`
    mutation userLogOut($token: String!){
        userLogOut(token: $token) @client
    }
`;

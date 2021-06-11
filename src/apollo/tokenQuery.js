import { gql } from "@apollo/client";

export const TOKENINFO = gql`
query{
    isLoggedIn @client
}
`;
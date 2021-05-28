import { gql } from "@apollo/client";

export const TOKENINFO = gql`
{
    isLoggedIn @client
}
`;
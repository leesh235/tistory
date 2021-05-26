import { gql } from "@apollo/client";

export const SIGNUP = gql`
mutation create($email: String!, $password: String!, $name: String!){
    create(email: $email, password: $password, name: $name)
}
`;
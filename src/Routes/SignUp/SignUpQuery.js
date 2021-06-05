import { gql } from "@apollo/client";

export const SIGNUP = gql`
mutation create($userId: String!, $password: String!, $email: String!){
    create(userId: $userId, password: $password, email: $email)
}
`;
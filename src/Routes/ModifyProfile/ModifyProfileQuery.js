import { gql } from "@apollo/client";

export const MODIFYPROFILE = gql`
    mutation ModifyProfile($password: String){
        ModifyProfile(password: $password)
    }
`;
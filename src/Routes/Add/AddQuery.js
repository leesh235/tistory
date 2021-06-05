import { gql } from "@apollo/client";

export const ADD = gql`
mutation createPost($title: String!, $contents:String){
    createPost(title: $title, contents: $contents)
}
`;
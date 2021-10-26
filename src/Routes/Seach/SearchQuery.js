import { gql } from "@apollo/client";

export const SEARCH = gql`  
    query getSearch($text: String){
        getSearch(text: $text){
            status
            postCnt
            search {
                postId
                writer
                title
                createdAt
            }
        }
    }
`;
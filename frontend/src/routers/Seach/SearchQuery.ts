import { gql } from "@apollo/client";

export const SEARCH = gql`  
    query getSearch($text: String, $count: Int!, $page: Int!){
        getSearch(text: $text, count: $count, page: $page){
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
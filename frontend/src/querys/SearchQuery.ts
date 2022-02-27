import { gql } from '@apollo/client';

export const SEARCH = gql`  
    query getSearch($text: text!, $count: Int! $page: Int!){
        getSearch(text: $text, count: $count, page: $page){
            ...on SearchSuccess{
                status
                message
                data{
                    postId
                    author
                    title
                    createAt
                    hits
                    thumbnail
                }
            }
            ...on SearchFailure{
                status
                message
            }
        }
    }
`;
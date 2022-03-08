import { gql } from '@apollo/client';

export const SEARCH = gql`
    query getSearch($text: String, $count: Int!, $page: Int!){
        getSearch(text: $text, count: $count, page: $page){
            ...on SearchSuccess{
                status
                message
                data{
                    search{
                        postId
                        author
                        title
                        createAt
                        hits
                        thumbnail    
                    }
                    searchQuantity
                }
            }
            ...on SearchFailure{
                status
                message
            }
        }
    }
`;
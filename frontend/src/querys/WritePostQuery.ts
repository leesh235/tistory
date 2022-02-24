import { gql } from '@apollo/client';

export const WRITEPOST =gql`
    mutation writePost($categoryName: String!, $title: String!){
        writePost(categoryName: $categoryName, title: $title){
            ...on WritePostSuccess{
                status
                message
                data{
                    id
                    category
                    author
                    createAt
                }
            } 
            ...on WritePostFailure{
                status
                message
            }
        }
    }
`;
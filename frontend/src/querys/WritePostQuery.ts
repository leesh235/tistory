import { gql } from '@apollo/client';

export const WRITEPOST =gql`
    mutation writePost($categoryId: Int!, $title: String!){
        writePost(categoryId: $categoryId, title: $title){
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
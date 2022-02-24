import { gql } from '@apollo/client';

export const WRITENOTICE =gql`
    mutation writePost($title: String!, $contents: String){
        writePost(title: $title, contents: $contents){
            ...on WriteNoticeSuccess{
                status
                message
                data{
                    id
                    title
                    contents
                    createAt
                }
            } 
            ...on WriteNoticeFailure{
                status
                message
            }
        }
    }
`;
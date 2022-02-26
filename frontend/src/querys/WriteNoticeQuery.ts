import { gql } from '@apollo/client';

export const WRITENOTICE =gql`
    mutation writeNotice($title: String!, $contents: String!){
        writeNotice(title: $title, contents: $contents){
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
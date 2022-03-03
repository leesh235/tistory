import { gql } from '@apollo/client';

export const MODIFYPOST = gql`
    mutation modifyPost($postId: Int!, $title: String){
        modifyPost(postId: $postId, title: $title){
            ...on ModifyPostSuccess{
                status
                message
                data{
                    title
                    modifyAt
                }
            }
            ...on ModifyPostFailure{
                status
                message
            }
        }
    }
`;
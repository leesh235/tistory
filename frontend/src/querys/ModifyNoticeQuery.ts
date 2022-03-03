import { gql } from "@apollo/client";

export const MODIFYNOTICE = gql`
    mutation modifyNotice($noticeId: Int!, $title: String, $contents: String){
        modifyNotice(noticeId: $noticeId, title: $title, contents: $contents){
            ... on ModifyNoticeSuccess{
                status
                message
                data{
                    id
                    title
                    contents
                    modifyAt
                }
            }
            ... on ModifyNoticeFailure{
                status
                message
            }
        }
    }
`;
import { gql } from "@apollo/client";

export const NOTICE = gql`
    query getNoticeDetail($noticeId: Int!){
        getNoticeDetail(noticeId: $noticeId){
            ... on NoticeDetailSuccess{
                status
                message
                data{
                    id
                    title
                    contents
                    createAt
                }
            }
            ... on NoticeDetailFailure{
                status
                message
            }
        }
    }
`;
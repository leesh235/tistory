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

export const DELETENOTICE = gql`
    mutation deleteNotice($noticeId: Int!){
        deleteNotice(noticeId: $noticeId){
            ... on DeleteNoticeSuccess{
                status
                message
                data{
                    deleteAt
                }
            }
            ... on DeleteNoticeFailure{
                status
                message
            }
        }
    }
`;
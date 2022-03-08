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

export const NOTICELIST =gql`
    query getNoticeList($count: Int!, $page: Int!){
        getNoticeList(count: $count, page: $page){
            ...on NoticeListSuccess{
                status
                message
                data{
                    notice{
                        id
                        title
                        contents
                        createAt
                    }
                    noticeQuantity
                }
            } 
            ...on NoticeListFailure{
                status
                message
            }
        }
    }
`;

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
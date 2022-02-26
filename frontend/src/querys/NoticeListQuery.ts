import { gql } from '@apollo/client';

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
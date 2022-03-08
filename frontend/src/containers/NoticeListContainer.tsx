import { useEffect, useState } from 'react';
import { NoticeList } from "../components/List/NoticeList";
import { useQuery } from "@apollo/client";
import { NOTICELIST } from "../querys/NoticeQuery";
import { Loading } from '../components/common/Loding';
import { Error } from '../components/common/Error';
import { Pages } from "../components/Pages";

export const NoticeListContainer = () => {

    const [count, setCount] = useState<number>(6);
    const [page, setPage] = useState<number>(1);

    const { loading, data, error } = useQuery(NOTICELIST, { 
        variables: {
            count,
            page
        }
    });

    if(loading) return <Loading />
    else if(error) return <Error />
    else{
        return(
            <Pages total={data?.getNoticeList?.data?.noticeQuantity} each={count} page={page} setPage={setPage}>
                <NoticeList noticeList={data?.getNoticeList?.data?.notice} noticeQuantity={data?.getNoticeList?.data?.noticeQuantity}/>
            </Pages>
        );
    }
}
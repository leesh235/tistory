import { NOTICE } from '../querys/NoticeQuery';
import { useQuery } from '@apollo/client';
import { NoticeDetail } from '../components/NoticeDetail';
import { useParams } from 'react-router-dom';
import { Loading } from '../components/common/Loding';
import { Error } from '../components/common/Error';

export const NoticeContainer = () => {

    const { id } = useParams<{id: string}>();

    const { loading, error, data } = useQuery(NOTICE,{
        variables: {
            noticeId: Number(id)
        }
    });

    if(loading) return <Loading /> 
    else if(error) return <Error />
    else{
        return(
            <NoticeDetail 
                id={data?.getNoticeDetail?.data?.id}
                title={data?.getNoticeDetail?.data?.title}
                contents={data?.getNoticeDetail?.data?.contents}
                createAt={data?.getNoticeDetail?.data?.createAt}
            />
        );
    }
}
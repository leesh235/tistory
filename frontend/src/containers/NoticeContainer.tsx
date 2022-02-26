import { NOTICE } from '../querys/NoticeQuery';
import { useQuery } from '@apollo/client';
import { NoticeDetail } from '../components/NoticeDetail';

export const NoticeContainer = () => {

    const { loading, data, error } = useQuery(NOTICE);

    return(
        <NoticeDetail />
    );
}
import { NOTICE, DELETENOTICE } from '../querys/NoticeQuery';
import { useQuery, useMutation } from '@apollo/client';
import { NoticeDetail } from '../components/NoticeDetail';
import { useParams } from 'react-router-dom';
import { Loading } from '../components/common/Loding';
import { Error } from '../components/common/Error';
import { routes } from '../routes';

export const NoticeContainer = () => {

    const { id } = useParams<{id: string}>();

    const { loading, error, data } = useQuery(NOTICE,{
        variables: {
            noticeId: Number(id)
        }
    });
    const [deleteNotice] = useMutation(DELETENOTICE);

    const onClick = async() => {
        try{
            if(window.confirm("게시글을 삭제하시겠습니까?")){
                const result = await deleteNotice({
                    variables: {
                        noticeId: Number(id)
                    }
                })
                if(result.data?.deleteNotice?.__typename !== "DeleteNoticeSuccess"){
                    console.log(result.data?.deleteNotice?.message);
                }
                window.location.replace(`${routes.noticeList}`);
            }
        }catch(error){
            console.log(error)
        }
    }

    if(loading) return <Loading /> 
    else if(error) return <Error />
    else{
        return(
            <NoticeDetail 
                id={data?.getNoticeDetail?.data?.id}
                title={data?.getNoticeDetail?.data?.title}
                contents={data?.getNoticeDetail?.data?.contents}
                createAt={data?.getNoticeDetail?.data?.createAt}
                onClick={onClick}
            />
        );
    }
}
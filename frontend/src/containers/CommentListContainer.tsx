import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { COMMENT, MODIFYCOMMENT, DLETECOMMENT } from '../querys/CommentQuery';
import { Error } from '../components/common/Error';
import { CommentList } from '../components/List/CommentList';
import { useSelector } from 'react-redux';

export const CommentListContainer = () => {
    const { postId } = useParams<{postId: string}>();
    const store_comment = useSelector((state: any) => state?.comment?.comment);

    const { data, error, refetch } = useQuery(COMMENT,{
        variables: {
            postId: Number(postId)
        }
    });

    const [modifyMutation] = useMutation(MODIFYCOMMENT);
    const [deleteMutation] = useMutation(DLETECOMMENT);

    const modifyComment = async(id: number) => {
        try{
            console.log("modify: ", id);
        }catch(error){
            console.log(error);
        }
    }

    const deleteComment = async(id: number) => {
        try{
            await deleteMutation({
                variables:{
                    commentId: id
                }
            })
        }catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        if(data?.getCommentList?.__typename === "CommentListSuccess"){
            if(
                data?.getCommentList?.data[data?.getCommentList?.data.length - 1].commentId !== store_comment &&
                data?.getCommentList?.data[data?.getCommentList?.data.length - 1].commentId !== -1
            ){
                refetch();
            }
        }
    },[store_comment])

    if(error) return <Error />
    else{
        return(
            <CommentList 
                commentList={data?.getCommentList?.data} 
                handleModifyComment={modifyComment}
                handleDeleteComment={deleteComment}
            />
        );
    }
}

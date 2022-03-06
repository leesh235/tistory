import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useQuery, useMutation } from '@apollo/client';
import { COMMENT, WRITECOMMENT, MODIFYCOMMENT, DLETECOMMENT } from '../querys/CommentQuery';
import { Error } from '../components/common/Error';
import { CommentList } from '../components/CommentList';
import { CommentForm } from '../components/Form/CommentForm';

interface Comment {
    comment: string,
}

export const CommentListContainer = () => {

    const { postId } = useParams<{postId: string}>();

    const { register, setValue, handleSubmit, getValues, setError, formState: { errors } } = useForm<Comment>();

    const { loading, data, error } = useQuery(COMMENT,{
        variables: {
            postId: Number(postId)
        }
    });
    const [writeMutation] = useMutation(WRITECOMMENT);
    const [modifyMutation] = useMutation(MODIFYCOMMENT);
    const [deleteMutation] = useMutation(DLETECOMMENT);

    const writeComment = async() => {
        try{
            const result = await writeMutation({
                variables:{
                    postId: Number(postId),
                    commentId: null,
                    contents: getValues("comment"),
                }
            })
        }catch(error){
            console.log(error);
        }
    }

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
        
    },[])

    if(error) return <Error />
    else{
        return(
            <>
                <CommentForm 
                    register={register}
                    handleSubmit={handleSubmit}
                    handleWriteComment={writeComment}
                />
                <CommentList 
                    commentList={data?.getCommentList?.data} 
                    handleModifyComment={modifyComment}
                    handleDeleteComment={deleteComment}
                />
            </>
        );
    }
}

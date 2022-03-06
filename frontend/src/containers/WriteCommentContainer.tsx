import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { WRITECOMMENT } from '../querys/CommentQuery';
import { CommentForm } from '../components/Form/CommentForm';
import { useDispatch } from 'react-redux';
import { setComment } from '../redux/actions/comment';

interface Comment {
    comment: string,
}

export const WriteCommentContainer = () => {
    const { postId } = useParams<{postId: string}>();
    const dispatch = useDispatch();

    const { register, handleSubmit, getValues } = useForm<Comment>();

    const [writeMutation] = useMutation(WRITECOMMENT);

    const writeComment = async() => {
        try{
            const { data } = await writeMutation({
                variables:{
                    postId: Number(postId),
                    commentId: null,
                    contents: getValues("comment"),
                }
            });
            if(data?.writeComment?.__typename === "WriteCommentSuccess"){
                dispatch(setComment(data?.writeComment?.data.id));
            }
        }catch(error){
            console.log(error);
        }
    }

    useEffect(() => {

    },[])

    return(
        <>
            <CommentForm 
                register={register}
                handleSubmit={handleSubmit}
                handleWriteComment={writeComment}
            />
        </>
    );
}
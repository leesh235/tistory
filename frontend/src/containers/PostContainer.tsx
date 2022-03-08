import React, {useEffect} from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { POST, DELETEPOST } from '../querys/PostQuery';
import { PostDetail } from '../components/Contents/PostDetail';
import { useParams } from "react-router-dom";
import { Loading } from '../components/common/Loding';
import { Error } from '../components/common/Error';
import { useHistory } from 'react-router';
import { getPostApi, deletePostApi } from "../api";
import { routes } from "../routes";

export const PostContainer = () => {

    const { postId } = useParams<{postId: string}>();

    const {loading, error, data} = useQuery(POST,{
        variables: {
            postId: Number(postId)
        }
    });

    const [deletePost] = useMutation(DELETEPOST);

    const contents = data?.getPostDetail?.data?.contents;

    const deleteHandler = async() => {
        if(window.confirm("게시물을 삭제하시겠습니까?")){
            const { data } = await deletePost({
                variables: {
                    postId: Number(postId)
                }
            })
            if(data?.deletePost?.__typename === "DeletePostSuccess" && contents !== null){
                const formData = {
                    postId: data?.deletePost?.data.id
                }
        
                // deletePostApi(formData).then(
                //     data => {
                //         console.log(data)
                //     }
                // )
            }
            window.location.replace(`${routes.home}`);
        }
    }

    useEffect(() => {
  
    },[])

    if(loading) return <Loading /> 
    else if(error) return <Error />
    else{
        return (
            <PostDetail 
                post={data?.getPostDetail?.data}
                onClick={deleteHandler}
            />
        );
    }
}
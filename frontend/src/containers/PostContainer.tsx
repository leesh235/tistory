import React, {useEffect, useState} from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { POST, DELETEPOST } from '../querys/PostQuery';
import { PostDetail } from '../components/Post/PostDetail';
import { useParams } from "react-router-dom";
import { Loading } from '../components/common/Loding';
import { Error } from '../components/common/Error';
import { useHistory } from 'react-router';
import { getPostApi, deletePostApi } from "../api";
import { routes } from "../routes"

export const PostContainer = () => {

    const routeHistory = useHistory();

    const { postId } = useParams<{postId: string}>();

    const [postContents, setPostContents] = useState<any>(null);

    const {loading, error, data} = useQuery(POST,{
        variables: {
            postId: Number(postId)
        }
    });

    const writer = data?.getPostDetail?.data?.writer;
    const contents = data?.getPostDetail?.data?.contents;

    // const [deletePost] = useMutation(DELETEPOST);

    const init = async() => {
        if(contents){
            const formData = {
                writer: writer,
                postId: Number(postId)
            }
            getPostApi(formData).then(
                data => {
                    setPostContents(data.data);
                }
            )
        }
    }

    const deleteHandler = async() => {
        if(window.confirm("게시물을 삭제하시겠습니까?")){
            // const {data: {DeletePost : {check, status}}} = await deletePost({
            //     variables: {
            //         postId: Number(postId)
            //     }
            // })
            // if(check && contents){
            //     const formData = {
            //         writer: writer,
            //         postId: Number(postId)
            //     }
        
            //     deletePostApi(formData).then(
            //         data => {
            //             console.log(data)
            //         }
            //     )
            // }
            window.location.replace(`${routes.home}`);
        }
    }

    useEffect(() => {
        if(data?.getPostDetail?.__typename !== "PostSuccess"){
            // alert(data?.getPostDetail?.message);
        }
    },[])

    if(loading) return <Loading /> 
    else if(error) return <Error />
    else{
        return (
            <PostDetail 
                postContents={"postContents"}
                post={data?.getPostDetail?.data}
                equal={true}
                onClick={deleteHandler}
            />
        );
    }
}
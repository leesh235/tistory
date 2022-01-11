import React, {useEffect, useState} from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { DETAIL, DELETEPOST } from "./DetailQuery";
import { useParams } from "react-router-dom";
import { DetailPresenter } from './DetailPresenter';
import { Loading } from "../../components/Loading";
import { isLogedIn } from "../../utiles"
import { useHistory } from 'react-router';
import { getPostApi, deletePostApi } from "../../api";
import { routes } from "../../routes"

export const DetailContainer = ({history, location}: any) => {

    const routeHistory = useHistory();

    if(!isLogedIn()){
        window.alert("로그인이 필요합니다")
        routeHistory.push(`${routes.login}`);
    }

    const { postId } = useParams<{postId: string}>();

    const [postContents, setPostContents] = useState<any>(null);

    const {loading, data} = useQuery(DETAIL,{
        variables: {
            postId: Number(postId)
        }
    });

    const writer = data?.getPostDetail?.Post?.writer;
    const contents = data?.getPostDetail?.Post?.contents;

    const [deletePost] = useMutation(DELETEPOST);

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
            const {data: {DeletePost : {check, status}}} = await deletePost({
                variables: {
                    postId: Number(postId)
                }
            })
            if(check && contents){
                const formData = {
                    writer: writer,
                    postId: Number(postId)
                }
        
                deletePostApi(formData).then(
                    data => {
                        console.log(data)
                    }
                )
            }
            window.location.replace(`${routes.home}`);
        }
    }

    useEffect(() => {
        init();
    },[loading])

    if(!loading){
        return (
            <DetailPresenter 
                postContents={postContents}
                post={data?.getPostDetail?.Post}
                equal={data?.getPostDetail?.equal}
                onClick={deleteHandler}
            />
        );
    }else{
        return (
            <Loading />
        );
    }
};
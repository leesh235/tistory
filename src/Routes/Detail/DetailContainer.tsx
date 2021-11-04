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
        routeHistory.push("/login");
    }

    const { postId } = useParams<{postId: string}>();

    const [postContents, setPostContents] = useState<any>(null);

    console.log(postId);
    const {loading, data} = useQuery(DETAIL,{
        variables: {
            postId: postId
        }
    });
    console.log(data)

    const [deletePost] = useMutation(DELETEPOST);

    const init = async() => {
        if(data?.getPostDetail?.Post?.contents === "exist"){
            const formData = {
                writer: data.getPostDetail.Post.writer,
                postId: postId
            }
            getPostApi(formData).then(
                data => {
                    setPostContents(data.data);
                }
            )
        }else{
            console.log("실패")
        }
    }

    const onClick = async() => {
        if(window.confirm("게시물을 삭제하시겠습니까?")){
            const {data: {DeletePost : {check, status}}} = await deletePost({
                variables: {
                    postId: postId
                }
            })
            if(check){
                const formData = {
                    writer: data.getPostDetail.Post.writer,
                    postId: postId
                }
        
                deletePostApi(formData).then(
                    data => {
                        console.log(data)
                    }
                )
                window.location.replace(`${routes.home}`)
            }
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
                onClick={onClick}
            />
        );
    }else{
        return (
            <Loading />
        );
    }
};
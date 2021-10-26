import React, {useEffect, useState} from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { DETAIL, DELETEPOST } from "./DetailQuery";
import { useParams } from "react-router-dom";
import DetailPresenter from './DetailPresenter';
import axios from "axios";
import { Loading } from "../../components/Loading";
import { getToken } from "../../utiles"
import { useHistory } from 'react-router';

export default ({history, location}) => {

    const routeHistory = useHistory();

    if(!getToken()){
        window.alert("로그인이 필요합니다")
        routeHistory.push("/login");
    }

    const { postId } = useParams();

    const [postContents, setPostContents] = useState("");

    console.log(postId);
    const {loading, data} = useQuery(DETAIL,{
        variables: {
            postId: postId
        }
    });
    console.log(data)

    const [deletePost] = useMutation(DELETEPOST);

    const fileserver = async() => {
        
        if(data?.getPostDetail?.Post?.contents === "exist"){
            try{
                const writer = data.getPostDetail.Post.writer
                const jwt = localStorage.getItem("token");
                const res = await axios({
                    method: "get",
                    url: `http://localhost:5000/editor/${writer}/${postId}`,
                    headers: {
                        Authorization: jwt,
                        "Content-Type": "multipart/form-data"
                    }
                })
                setPostContents(res.data);
            }catch(err){
                console.log(err.response);
            }
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
                window.location.replace("/")
                const writer = data.getPostDetail.Post.writer
                const jwt = localStorage.getItem("token");
                const res = await axios({
                    method: "get",
                    url: `http://localhost:5000/editor/delete/${writer}/${postId}`,
                    headers: {
                        Authorization: jwt,
                        "Content-Type": "multipart/form-data"
                    }
                })
            }
        }
    }

    useEffect(() => {
        fileserver();
    },[loading])
    console.log(data)
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
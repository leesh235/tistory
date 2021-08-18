import React, {useEffect, useState} from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { DETAIL, DELETEPOST } from "./DetailQuery";
import { useParams } from "react-router-dom";
import DetailPresenter from './DetailPresenter';
import axios from "axios";

export default ({history, location}) => {

    const { postId } = useParams();

    const [postContents, setPostContents] = useState("");

    // console.log(postId);

    const {loading, data} = useQuery(DETAIL,{
        variables: {
            postId: postId,
            email: location.state.writer
        }
    });
    console.log(data)

    const [deletePost] = useMutation(DELETEPOST);

    const fileserver = async() => {
        
        if(data?.getPostDetail?.Post?.contents === "exist"){
            try{
                const jwt = localStorage.getItem("token");
                const res = await axios({
                    method: "get",
                    url: `http://localhost:5000/editor/${postId}`,
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
                const jwt = localStorage.getItem("token");
                const res = await axios({
                    method: "get",
                    url: `http://localhost:5000/editor/delete/${postId}`,
                    headers: {
                        Authorization: jwt,
                        "Content-Type": "multipart/form-data"
                    }
                })
            }
        }
    }

    useEffect(() => {
        if(location.state.writer === undefined){
            history.push(`/`);
        }
        fileserver();
    },[loading])

    return (
        <div>
            {!loading && data?.getPostDetail?.Post ? 
                <DetailPresenter 
                    postContents={postContents}
                    post={data.getPostDetail.Post}
                    equal={data.getPostDetail.equal}
                    onClick={onClick}
                /> : 
            "loading..."}
        </div>
    );
};
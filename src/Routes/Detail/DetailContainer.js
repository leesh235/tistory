import React, {useEffect, useState} from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { DETAIL, DELETEPOST } from "./DetailQuery";
import { useParams } from "react-router-dom";
import DetailPresenter from './DetailPresenter';
import axios from "axios";

export default ({history, location}) => {

    const { postId } = useParams();

    const [postImg, setPostImg] = useState("");

    // console.log(postId);

    const {loading, data} = useQuery(DETAIL,{
        variables: {
            postId: postId,
            id: location.state.id
        } 
    });

    const [deletePost] = useMutation(DELETEPOST);

    const fileserver = async() => {
        
        if(data.getPost.Post.postImgId !== null){
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

                // var blob = new Blob([res.data]);
                // var postHtml = await new Response(blob).text();

                setPostImg(res.data);
            }catch(err){
                console.log(err.response);
            }
        }else{
            console.log("실패")
        }
    }

    const onClick = async() => {
        if(window.confirm("게시물을 삭제하시겠습니까?")){
            const {data: {DeletePost}} = await deletePost({
                variables: {
                    postId: postId
                }
            })
            console.log(DeletePost)
            if(DeletePost){
                window.location.replace("/")
            }
        }
    }

    useEffect(() => {
        if(location.state.id === undefined){
            history.push(`/`);
        }
        if(!loading && postImg === ""){
            fileserver();
        }

    },[loading])

    return (
        <div>
            {postId && !loading && data.getPost ? 
                <DetailPresenter 
                    postImg={postImg}
                    post={data.getPost.Post}
                    equal={data.getPost.equal}
                    postId={postId}
                    onClick={onClick}
                /> : 
            "loading..."}
            
        </div>
    );
};
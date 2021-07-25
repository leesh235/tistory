import React, {useEffect, useState} from 'react';
import { useQuery } from '@apollo/client';
import { DETAIL } from "./DetailQuery";
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

    const fileserver = async() => {

        if(data.getPost.Post.postImgId !== null){
            const jwt = localStorage.getItem("token");
            const res = await axios({
                method: "get",
                url: `http://localhost:5000/postImg/${postId}`,
                headers: {
                    Authorization: jwt,
                    "Content-Type": "multipart/form-data"
                }
            })
            console.log(res.data)
            setPostImg(res.data.postImg);
        }
    }

    useEffect(() => {
        if(location.state.id === undefined){
            history.push(`/`);
        }
        if(!loading){
            fileserver();
        }

    },[postImg])

    return (
        <div>
            {postId && !loading && data.getPost ? 
                <DetailPresenter 
                    postImg={postImg}
                    post={data.getPost.Post}
                    equal={data.getPost.equal}
                    postId={postId}
                /> : 
            "loading..."}
            
        </div>
    );
};
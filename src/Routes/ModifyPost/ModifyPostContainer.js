import React, { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import { MODIFYPOST } from "./ModifyPostQuery";
import ModifyPostPresenter from './ModifyPostPresenter';
import useInput from "../../Hooks/useInput";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default ({history, location}) => {

    useEffect(() => {
        if(history.location.state === ""){
            setHistory.goBack();
        }
       console.log(history.location.state) 
    },[])

    const [postData, setPostData] = useState("");

    const {postId} = useParams();

    const titleInput = useInput(history.location.state.title);
    const contentsInput = useInput(history.location.state.contents);

    const [postImg, setPostImg] = useState("");

    const [setPostMutation] = useMutation(MODIFYPOST, {
        variables: {
            postId,
            title: titleInput.value,
            contents: contentsInput.value
        }
    })

    const setHistory = useHistory();

    const handlePicture = (e) => {
        e.preventDefault();
        const image = e.target.files[0];
        // console.log(image);
        setPostImg(image);
    }
    
    const onSubmit = async(e) => {
        e.preventDefault();

        try{

            if(titleInput.value !== ""){
                const { data: { ModifyPost } } = await setPostMutation();

                if(ModifyPost){
                    alert("내용이 변경되었습니다.")
                    setTimeout(() => {
                        setHistory.goBack()
                    }, 500);
                }

            }else{
                alert("제목을 입력하세요.")
            }

            if(postImg !== undefined && postImg !== null){
                const jwt = localStorage.getItem("token");
                const formData = new FormData();
                // console.log(postId)
                formData.append("user", postId);
                formData.append("streamfile", postImg);
    
                await axios({
                    method: "post",
                    url: "http://localhost:5000/post",
                    data: formData,
                    headers: {
                        Authorization: jwt,
                        "Content-Type": "multipart/form-data",
                    }
                })
                alert("사진이 변경되었습니다.");
                setHistory.goBack();
            }

        }catch(error){
            console.log(error);
        }
    }

    return (
        <ModifyPostPresenter 
            title={titleInput}
            contents={contentsInput}
            onSubmit={onSubmit}
            handlePicture={handlePicture}
            setPostData={setPostData}
        />
    );

}
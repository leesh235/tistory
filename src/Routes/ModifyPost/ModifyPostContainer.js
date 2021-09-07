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
        init()
    },[])
    
    console.log(history.location) 
    const editorRef = React.createRef();

    const {postId} = useParams();

    const titleInput = useInput(history.location.state.title);

    const [postImg, setPostImg] = useState("");

    const [setPostMutation] = useMutation(MODIFYPOST)

    const setHistory = useHistory();

    const handlePicture = (e) => {
        e.preventDefault();
        const image = e.target.files[0];
        // console.log(image);
        setPostImg(image);
    }
    
    const onSubmit = async(e) => {
        const postData = editorRef.current.getInstance().getHTML()
        try{
            
            if(titleInput.value !== ""){
                const { data: { ModifyPost: {check, status} } } = await setPostMutation({
                    variables: {
                        postId: Number(postId),
                        title: titleInput.value,
                    }
                });
 
                if(check){
                    alert("내용이 변경되었습니다.")
                    window.location.replace(`/detail/${postId}`)
                    const jwt = localStorage.getItem("token");
                    const formData = new FormData();
                    // console.log(postId)
                    formData.append("postId", postId);
                    formData.append("title", titleInput.value);
                    formData.append("editor", postData);
        
                    await axios({
                        method: "post",
                        url: "http://localhost:5000/editor",
                        data: formData,
                        headers: {
                            Authorization: jwt,
                            "Content-Type": "multipart/form-data",
                        }
                    })
                }
            }else{
                alert("제목을 입력하세요.")
            }


        }catch(error){
            console.log(error);
        }
    }

    const init = async() => {
        const jwt = localStorage.getItem("token");
        const {data} = await axios({
            method: "get",
            url: `http://localhost:5000/editor/${postId}`,
            headers: {
                Authorization: jwt,
                "Content-Type": "multipart/form-data"
            }
        })
        editorRef.current.getInstance().setHTML(data)
    }

    return (
        <ModifyPostPresenter 
            title={titleInput}
            onSubmit={onSubmit}
            handlePicture={handlePicture}
            editorRef={editorRef}
        />
    );

}
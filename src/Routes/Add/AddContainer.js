import React, { useState, useRef, useEffect } from 'react';
import { useMutation } from "@apollo/client";
import { ADD } from "./AddQuery";
import AddPresenter from './AddPresenter';
import useInput from '../../Hooks/useInput';
import axios from "axios";

const AddContainer = (props) => {

    const editorRef = React.createRef();

    const titleInput = useInput("");

    // const [postData, setPostData] = useState("");

    const [AddMutation] = useMutation(ADD);

    const onSubmit = async(e) => {
        e.preventDefault();
        const postData = editorRef.current.getInstance().getHTML()
        console.log(postData)
        try{
            if(titleInput.value !== ""){
                const { data: { createPost : {postId, status} } } = await AddMutation({
                    variables: {
                        title: titleInput.value,
                        contents: postData
                    }
                });
                console.log("postId: ", postId, status)
                alert("작성 완료");
                window.location.replace("/");
                if(status){
                    const jwt = localStorage.getItem("token");
                    const formData = new FormData();
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
            }else {
                alert("제목을 작성해주세요.");
            }
        } catch(error){
            console.log(error);
        }
    }

    return (
        
        <AddPresenter 
            title={titleInput}
            onSubmit={onSubmit}
            // setPostData={setPostData}
            editorRef={editorRef}
        />
 
    );
}

export default AddContainer;
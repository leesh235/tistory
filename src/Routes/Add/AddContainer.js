import React, { useState } from 'react';
import { useMutation } from "@apollo/client";
import { ADD } from "./AddQuery";
import AddPresenter from './AddPresenter';
import useInput from '../../Hooks/useInput';
import { useHistory } from "react-router-dom";
import axios from "axios";

const AddContainer = (props) => {

    const titleInput = useInput("");
    const contentsInput = useInput("");
    const [picture, setPicture] = useState("");
    const [postData, setPostData] = useState("");

    const [AddMutation] = useMutation(ADD);

    const history = useHistory();

    const handlePicture = (e) => {
        e.preventDefault();
        const image = e.target.files[0];
        // console.log(image);
        // console.log(props)
        setPicture(image);
      }

    const onSubmit = async(e) => {
        e.preventDefault();

        try{
            if(titleInput.value !== ""){
                const { data: { createPost : {postId} } } = await AddMutation({
                    variables: {
                        title: titleInput.value,
                        contents: contentsInput.value
                    }
                });
                console.log("postId: ", postId)
                if(postId){
                    alert("작성 완료");
                    window.location.replace("/");
                    if(picture !== undefined && picture !== null){
                        const jwt = localStorage.getItem("token");
                        const formData = new FormData();
                        formData.append("user", postId);
                        formData.append("streamfile", picture);
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
            contents={contentsInput}
            handlePicture={handlePicture}
            onSubmit={onSubmit}
            setPostData={setPostData}
        />
    );
}

export default AddContainer;
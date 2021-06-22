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

    const [AddMutation] = useMutation(ADD, {
        variables: {
            title: titleInput.value,
            contents: contentsInput.value
        }
    });

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
                const { data: createPost } = await AddMutation();
                if(createPost){
                    alert("작성 완료");
                    history.push("/");
                }else{
                    return false;
                }
                const formData = new FormData();
                formData.append("title", titleInput.value);
                formData.append("streamfile", picture);
            
                await axios({
                  method: "post",
                  url: "http://localhost:5000/add",
                  data: formData,
                  headers: {
                    "Content-Type": "multipart/form-data",
                  }
                })
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
        />
    );
}

export default AddContainer;
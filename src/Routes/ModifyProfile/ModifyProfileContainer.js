import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { MODIFYPROFILE } from "./ModifyProfileQuery";
import ModifyProfilePresenter from './ModifyProfilePresenter';
import useInput from "../../Hooks/useInput";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default () => {


    const passwordInput = useInput("");
    const passConfirmInput = useInput("");
    const [picture, setPicture] = useState("");

    const [setProfileMutation] = useMutation(MODIFYPROFILE,{
        variables: {
            password: passwordInput.value
        }
    });

    const handlePicture = (e) => {
        e.preventDefault();
        const image = e.target.files[0];
        // console.log(image);
        setPicture(image);
    }


    const history = useHistory();
    const onSubmit = async(e) => {
        e.preventDefault();

        try{

            if(passwordInput.value !== passConfirmInput.value){
                alert("비밀번호가 일치하지 않습니다.");
            } else{
                const { data: { ModifyProfile } } = await setProfileMutation();
                if(ModifyProfile){
                    alert("비밀번호가 변경되었습니다.");
                    history.goBack();
                }else{
                    return false;
                }

                if(picture !== undefined && picture !== null){
                    const formData = new FormData();
                    // formData.append("title", titleInput.value);
                    formData.append("streamfile", picture);
        
                    await axios({
                        method: "post",
                        url: "http://localhost:5000/profile",
                        data: formData,
                        headers: {
                        "Content-Type": "multipart/form-data",
                        }
                    })
                }
            }

        } catch(error){
            console.log(error);
        }
    }

    return (
        <ModifyProfilePresenter 
            password={passwordInput}
            passConfirm={passConfirmInput}
            handlePicture={handlePicture}
            onSubmit={onSubmit}
        />
    );

}
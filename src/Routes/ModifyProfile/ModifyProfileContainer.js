import React, { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import { MODIFYPROFILE } from "./ModifyProfileQuery";
import ModifyProfilePresenter from './ModifyProfilePresenter';
import useInput from "../../Hooks/useInput";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default ({props}) => {

    let userId = props.history.location.state.userId
    const passwordInput = useInput("");
    const passConfirmInput = useInput("");
    const [picture, setPicture] = useState("");

    const [setProfileMutation] = useMutation(MODIFYPROFILE);

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

                if(passwordInput.value !== ""){
                    const { data: { ModifyProfile } } = await setProfileMutation({
                        variables: {
                            password: passwordInput.value
                        }
                    });
                    // console.log(ModifyProfile)
    
                    if(ModifyProfile){
                        alert("비밀번호가 변경되었습니다.");
                        history.goBack();
                    }
                }
                
                if(picture !== undefined && picture !== null){
                    const jwt = localStorage.getItem("token");
                    const formData = new FormData();
                    console.log(userId)
                    formData.append("user", userId);
                    formData.append("streamfile", picture);
        
                    await axios({
                        method: "post",
                        url: "http://localhost:5000/profile",
                        data: formData,
                        headers: {
                            Authorization: jwt,
                            "Content-Type": "multipart/form-data",
                        }
                    })
                    alert("프로필 사진이 변경되었습니다.");
                    history.goBack();
                }
            }

        } catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        if(userId === ""){
            history.push("/profile");
        }
        console.log(userId);
    },[])

    return (
        <ModifyProfilePresenter 
            password={passwordInput}
            passConfirm={passConfirmInput}
            handlePicture={handlePicture}
            onSubmit={onSubmit}
        />
    );

}
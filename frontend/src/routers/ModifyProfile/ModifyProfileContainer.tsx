import React, { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import { MODIFYPROFILE } from "./ModifyProfileQuery";
import { ModifyProfilePresenter } from './ModifyProfilePresenter';
import { useHistory } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { uploadProfileImgApi } from "../../api";
import { routes } from '../../routes';

export const ModifyProfileContainer = ({props}: any) => {

    const { register, setValue, handleSubmit, getValues, setError, formState: { errors } } = useForm({ mode:"onBlur" });
    
    let email = props?.history?.location?.state?.email

    const [picture, setPicture] = useState("");

    const [setProfileMutation] = useMutation(MODIFYPROFILE);

    const handlePicture = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const image: any = e.target.files;
        setPicture(image[0]);
    }


    const history = useHistory();
    const onSubmit = async() => {
        try{     
            if(getValues("password") !== getValues("confirmPassword")){
                alert("비밀번호가 일치하지 않습니다.");
            } else{

                if(getValues("password") !== ""){
                    const { data: { ModifyProfile: {
                        check,
                        status
                    } } } = await setProfileMutation({
                        variables: {
                            password: getValues("password")
                        }
                    });
                }
                
                if(picture !== ""){
                    const formData = new FormData();

                    formData.append("user", email);
                    formData.append("streamfile", picture);
        
                    uploadProfileImgApi(formData).then(
                        data => {
                            console.log(data);
                        },
                        err => {
                            console.log(err);
                        }
                    )
                }
                alert("개인정보가 변경되었습니다");
                window.location.replace(`${routes.profile}`);
            }

        } catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        if(email === ""){
            history.push("/profile");
        }
    },[])

    return (
        <ModifyProfilePresenter 
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            handlePicture={handlePicture}
            onSubmit={onSubmit}
        />
    );

}
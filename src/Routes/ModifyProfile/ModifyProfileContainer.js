import React from 'react';
import { useMutation } from '@apollo/client';
import { MODIFYPROFILE } from "./ModifyProfileQuery";
import ModifyProfilePresenter from './ModifyProfilePresenter';
import useInput from "../../Hooks/useInput";

export default () => {

    const passwordInput = useInput("");
    const passConfirmInput = useInput("");

    const [setPassMutation] = useMutation(MODIFYPROFILE,{
        variables: {
            password: passwordInput.value
        }
    });

    const onSubmit = async(e) => {
        e.preventDefault();

        try{

            if(passwordInput.value !== "" && passConfirmInput.value !== ""){
                if(passwordInput.value !== passConfirmInput.value){
                    alert("비밀번호가 일치하지 않습니다.");
                } else{
                    const { data: { ModifyProfile } } = await setPassMutation();
                    if(ModifyProfile){
                        alert("비밀번호가 변경되었습니다.");
                        window.location.replace("/modifyProfile");
                    }
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
            onSubmit={onSubmit}
        />
    );

}
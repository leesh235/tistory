import React from "react";
import { useMutation } from "@apollo/client";
import { FORGET_PASS } from "./ForgetQuery";
import { useHistory } from "react-router-dom";
import ForgetPresenter from "./ForgetPresenter";
import {useEmailInput} from '../../Hooks/useInput';

const ForgetContainer = () => {

    const emailInput = useEmailInput("");

    const [forgetPassMutation] = useMutation(FORGET_PASS,{
        variables: {
            email: emailInput.value
        }
    })

    const  history = useHistory();

    const onFn = async (e) => {
        e.preventDefault()
        try{
            if(emailInput !== ""){
                const { data: forgetPass } = await forgetPassMutation();
                console.log(forgetPass)
                if(forgetPass){
                    alert("비밀번호가 재발급 되었습니다.");

                }else{
                    alert("존재하지않는 email입니다.");
                    setTimeout(() => {
                        history.goBack();
                    }, 4000);
                }
            }
        }catch(error){
            console.log(error);
        }
    }

    return (
        <ForgetPresenter 
            email={emailInput}
            onFn={onFn}
        />
    );
}

export default ForgetContainer;
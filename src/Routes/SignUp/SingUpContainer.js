import React from 'react';
import { useMutation } from '@apollo/client';
import SignUpPresenter from './SignUpPresenter';
import { useHistory } from "react-router-dom";
import useInput from "../../Hooks/useInput";
import { SIGNUP } from "./SignUpQuery";

export default () => {

    const idInput = useInput("");
    const passInput = useInput("");
    const passConfirmInput = useInput("");
    const emailInput = useInput("");

    const [signupMutation] = useMutation(SIGNUP, {
        variables: {
            userId: idInput.value,
            password: passInput.value,
            email: emailInput.value
        }
    });

    const  history = useHistory();

    const onSubmit = async(e) => {
        e.preventDefault();

        try{
            if(
                idInput.value !== "" &&
                passInput.value !== "" &&
                passConfirmInput.value !== "" &&
                emailInput.value !== ""
            ){
                if(passInput.value !== passConfirmInput.value){
                    alert("비밀번호가 일치하지 않습니다.");
                }else{
                    const {data: create} = await signupMutation();
                    if(create){
                        alert("정상적으로 가입되었습니다.");
                        history.push("/login");
                    }
                }
            }
        } catch (error){
            console.log(error);
        }
    }

    return (
        <SignUpPresenter 
            id={idInput}
            password={passInput}
            passConfirm={passConfirmInput}
            email={emailInput}
            onSubmit={onSubmit}
        />
    );

}
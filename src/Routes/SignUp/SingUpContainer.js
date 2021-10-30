import React from 'react';
import { useMutation } from '@apollo/client';
import SignUpPresenter from './SignUpPresenter';
import { useHistory } from "react-router-dom";
import { useTextInput, useEmailInput } from "../../Hooks/useInput";
import { SIGNUP } from "./SignUpQuery";
import { useForm } from 'react-hook-form';

export default () => {

    const nickNameInput = useTextInput("");
    const passInput = useTextInput("");
    const passConfirmInput = useTextInput("");
    const emailInput = useEmailInput("");

    const { register, setValue, handleSubmit, getValues, setError, formState: { errors } } = useForm({ mode:"onBlur" });

    const [signupMutation] = useMutation(SIGNUP);

    const  history = useHistory();

    const onSubmit = async(e) => {
        e.preventDefault();

        try{
            const { data: { signUp: { check, status } } } = await signupMutation({
                variables: {
                    nickName: nickNameInput.value,
                    password: passInput.value,
                    email: emailInput.value
                }
            });
            if(check){
                alert("정상적으로 가입되었습니다.");
                history.push("/login");
            }
        } catch (error){
            console.log(error);
        }
    }

    return (
        <SignUpPresenter 
            onSubmit={onSubmit}
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
        />
    );

}
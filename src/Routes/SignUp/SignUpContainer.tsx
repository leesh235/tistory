import React from 'react';
import { useMutation } from '@apollo/client';
import { SignUpPresenter } from './SignUpPresenter';
import { useHistory } from "react-router-dom";
import { SIGNUP } from "./SignUpQuery";
import { useForm } from 'react-hook-form';

interface SignUp {
    email: string,
    nickName: string,
    password: string,
    confirmPassword: string,
}

export const SignUpContainer = () => {

    const { register, setValue, handleSubmit, getValues, setError, formState: { errors } } = useForm<SignUp>({ mode:"onBlur" });

    const [signupMutation] = useMutation(SIGNUP);

    const  history = useHistory();

    const onSubmit = async() => {
        try{
            const { data: { signUp: { check, status } } } = await signupMutation({
                variables: {
                    nickName: getValues("nickName"),
                    password: getValues("password"),
                    email: getValues("email")
                }
            });
            console.log(check, status)
            if(check){
                alert("정상적으로 가입되었습니다.");
                history.push("/login");
            }else{
                if(status === "exist"){
                    alert("이미 가입한 이메일입니다");
                }else{
                    alert("server Error");
                }
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
            getValues={getValues}
            errors={errors}
        />
    );

}
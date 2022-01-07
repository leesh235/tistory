import React from 'react';
import { useMutation } from '@apollo/client';
import { LogInPresenter } from './LogInPresenter';
import { useHistory } from "react-router-dom";
import { LOGIN, TOKENLOGIN } from "./LogInQuery";
import { useForm } from 'react-hook-form';

interface LogIn {
    email: string,
    password: string,
}

export const LogInContainer = () => {

    const { register, setValue, handleSubmit, getValues, setError, formState: { errors } } = useForm<LogIn>({ mode:"onBlur" });
 
    const [loginMutation] = useMutation(LOGIN);
    const [tokenMutation] = useMutation(TOKENLOGIN);
  
    const history = useHistory();

    const onSubmit = async() => {
        try{
            const {
                data: {
                    login: {
                        user,
                        check,
                        status
                    }
                }
            } = await loginMutation({
                variables: {
                    email: getValues("email"),
                    password: getValues("password")
                }
            });

            if(check){

                await tokenMutation({
                    variables: {
                        token: user.token
                    }
                });
                setTimeout(() => {
                    window.location.replace("/")
                }, 500);

            }else{
                window.alert("아이디가 없거나 비밀번호가 틀렸습니다.");
            }
        }catch (error) {
            console.log(error);
        }
    }

    return (
        <LogInPresenter 
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            onSubmit={onSubmit}
        />
    );
}
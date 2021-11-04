import React from 'react';
import { UnresisterPresenter } from './UnresisterPresenter';
import { useMutation } from '@apollo/client';
import { UNRESISTER } from "./UnresisterQuery";
import { TOKENLOGOUT } from "../../apollo/tokenQuery";
import { useForm } from 'react-hook-form';
import { unregisterApi } from "../../api";
import { routes } from '../../routes';

interface User{
    password: string,
    confirmPassword: string,
}

export const UnresisterContainer = ({props}: any) => {

    const { state } = props.history.location
    // console.log(state)

    const { register, setValue, handleSubmit, getValues, setError, formState: { errors } } = useForm<User>({ mode:"onBlur" });
    
    const [setUnresister] = useMutation(UNRESISTER);
    const [tokenMutation] = useMutation(TOKENLOGOUT);

    const onSubmit = async() => {
        if(window.confirm("회원탈퇴를 하시겠습니다?")){
            const { data : {Unresister : { check, status } } } = await setUnresister({
                variables:{
                    email: state.userInfo.email,
                    password: getValues("password")
                }
            })
            if(check){
                await tokenMutation();
                const writer = state.userInfo.email;
                unregisterApi(writer).then(
                    data => {
                        console.log(data)
                        window.location.replace(`${routes.home}`);
                    },
                    err => {
                        console.log(err)
                    }
                )
            }else{
                window.alert("비밀번호가 틀렸습니다.")
            }
        }
    }

    return(
            <UnresisterPresenter 
                register={register}
                handleSubmit={handleSubmit}
                errors={errors}
                onSubmit={onSubmit}
            />
    );
}
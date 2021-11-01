import React from "react";
import { useMutation } from "@apollo/client";
import { FORGET_PASS } from "./ForgetQuery";
import { useHistory } from "react-router-dom";
import ForgetPresenter from "./ForgetPresenter";
import { useForm } from 'react-hook-form';

const ForgetContainer = () => {

    const { register, setValue, handleSubmit, getValues, setError, formState: { errors } } = useForm({ mode:"onBlur" });

    const [forgetPassMutation] = useMutation(FORGET_PASS)

    const  history = useHistory();

    const onSubmit = async () => {
        try{
            const { data: {
                forgetPass: {
                    check,
                    status
                }
            }} = await forgetPassMutation({
                variables: {
                    email: getValues("email")
                }
            });
            console.log(check, status)
            if(check){
                alert("비밀번호가 재발급 되었습니다.");
                history.goBack();
            }else{
                alert("존재하지않는 email입니다.");
            }
        }catch(error){
            console.log(error);
        }
    }

    return (
        <ForgetPresenter 
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            onSubmit={onSubmit}
        />
    );
}

export default ForgetContainer;
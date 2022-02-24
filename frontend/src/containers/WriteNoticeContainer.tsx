import { useEffect } from 'react';
import { WRITENOTICE } from '../querys/WriteNoticeQuery';
import { useMutation } from "@apollo/client";
import { useForm } from 'react-hook-form';
import { NoitceForm } from '../components/Form/NoitceForm';

export const WriteNoticeContainer = () => {

    const { register, setValue, handleSubmit, getValues, setError, formState: { errors } } = useForm({ mode:"onChange" });
    
    const [noticeMutation] = useMutation(WRITENOTICE);

    const onSubmit = async() => {
        try{          
            const { data } = await noticeMutation({
                variables: {
                    title: getValues("title"),
                    contents: getValues("contents")
                }
            });

            if(data?.writeNotice?.__typename === "WriteNoticeSuccess"){
                alert("작성 완료");
                window.location.replace("/");
            }
        } catch(error){
            console.log(error);
        }
    }

    useEffect(() => {

    },[])

    return(
        <NoitceForm 
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            onSubmit={onSubmit}
        />
    );
}
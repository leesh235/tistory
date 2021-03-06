import { useEffect } from 'react';
import { WRITENOTICE } from '../querys/NoticeQuery';
import { useMutation } from "@apollo/client";
import { useForm } from 'react-hook-form';
import { NoitceForm } from '../components/Form/NoitceForm';
import { routes } from '../routes';

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
                window.location.replace(`${routes.noticeList}`);
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
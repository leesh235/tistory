import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { MODIFYNOTICE } from "../querys/NoticeQuery";
import { NOTICE } from "../querys/NoticeQuery";
import { Error } from "../components/common/Error";
import { Loading } from "../components/common/Loding";
import { routes } from "../routes";
import { NoitceForm } from "../components/Form/NoitceForm";

interface Notice {
    title: string,
    contents: string,
}

export const ModifyNoticeContainer = () => {

    const { register, setValue, handleSubmit, getValues, setError, formState: { errors } } = useForm<Notice>({ mode:"onBlur" });

    const { id } = useParams<{id: string}>();

    const { loading, data, error } = useQuery(NOTICE, {
        variables: {
            noticeId: Number(id)
        }
    });

    const [noticeMutation] = useMutation(MODIFYNOTICE);

    const onSubmit = async() => {
        try{
            if(window.confirm("정보를 변경하시겠습니까?")){
                const result = await noticeMutation({
                    variables: {
                        noticeId: Number(id),
                        title: getValues("title"),
                        contents: getValues("contents"),
                    }
                });

                if(result.data?.modifyNotice?.__typename === "ModifyNoticeSuccess"){
                    window.location.replace(`${routes.notice}${id}`);
                }else{
                    alert(result.data?.modifyNotice.message);
                }
            }
        }catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        if(data?.getNoticeDetail?.__typename === "NoticeDetailSuccess"){
            setValue("title", data?.getNoticeDetail?.data.title);
            setValue("contents", data?.getNoticeDetail?.data.contents);
        }
    },[])

    if(loading){
        return <Loading />
    }else if(error){
        return <Error />
    }else{
        return (
            <NoitceForm 
                register={register}
                handleSubmit={handleSubmit}
                errors={errors}
                onSubmit={onSubmit}
            />
        );
    }
}
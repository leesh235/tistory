import React, { useEffect, useRef } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { MODIFYPOST } from "./ModifyPostQuery";
import { ModifyPostPresenter } from './ModifyPostPresenter';
import { useParams } from "react-router-dom";
import { routes } from "../../routes"
import { useForm } from 'react-hook-form';
import { writePostApi, getPostApi } from "../../api";
import { DETAIL } from "../Detail/DetailQuery";
import { Loading } from "../../components/Loading";
import axios from 'axios';
import { getToken } from "../../utils/auth";

export const ModifyPostContainer = () => {

    const {postId} = useParams<{ postId: string }>();
console.log(postId)
    const { register, setValue, handleSubmit, getValues, setError, formState: { errors } } = useForm({ mode:"onBlur" });
    
    const {loading, data} = useQuery(DETAIL,{
        variables: {
            postId: Number(postId)
        }
    });

    useEffect(() => {
        setValue("title", data?.getPostDetail?.Post?.title);
        if(data?.getPostDetail?.Post?.contents){
            init();
        }
    },[])
    

    const editorRef = useRef<any>();

    const [setPostMutation] = useMutation(MODIFYPOST);

    const onSubmit = async() => {
        const postData: any = editorRef.current.getInstance().getHTML();

        try{
            const writer: string = data?.getPostDetail?.Post?.writer;
            const title: string = getValues("title");

            if(title){
                const { data: { ModifyPost: {check, status} } } = await setPostMutation({
                    variables: {
                        postId: Number(postId),
                        title: title,
                    }
                });
 
                if(postData !== "" && check){
                    const formValue: {
                        writer: string,
                        postId: number,
                        title: string,
                        editor: any,
                    } = {
                        writer: writer,
                        postId: Number(postId),
                        title: title,
                        editor: postData,
                    }
                    writePostApi(formValue).then(
                        data => {
                            console.log(data)
                        },
                        err => {
                            console.log(err)
                        }
                    )
                }
                alert("내용이 변경되었습니다.");
                window.location.replace(`${routes.detail}${postId}`);
            }else{
                alert("제목을 입력하세요.");
            }
        }catch(error){
            console.log(error);
        }
    }

    const init = async() => {
        const formData = {
            writer: data?.getPostDetail?.Post?.writer,
            postId: Number(postId)
        }
        getPostApi(formData).then(
            data => {
                editorRef.current.getInstance().setHTML(data.data)
            }
        )
    }

    if(!loading){
        return (
            <ModifyPostPresenter 
                register={register}
                handleSubmit={handleSubmit}
                errors={errors}
                onSubmit={onSubmit}
                editorRef={editorRef}
            />
        );
    }else{
        return <Loading />
    }

}
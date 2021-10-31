import React, { useEffect, useRef } from 'react';
import { useMutation } from '@apollo/client';
import { MODIFYPOST } from "./ModifyPostQuery";
import ModifyPostPresenter from './ModifyPostPresenter';
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { writePostApi, getPostApi } from "../../api";

export default ({history, location}) => {

    // console.log(history.location) 
    useEffect(() => {
        if(history.location.state === ""){
            setHistory.goBack();
        }else{
            setValue("title", history.location.state.title)
            init()
        }
    },[])
    
    const { register, setValue, handleSubmit, getValues, setError, formState: { errors } } = useForm({ mode:"onBlur" });

    const editorRef = useRef();

    const {postId} = useParams();

    const [setPostMutation] = useMutation(MODIFYPOST)

    const setHistory = useHistory();

    const onSubmit = async() => {
        const postData = editorRef.current.getInstance().getHTML()
        try{
            const writer = history.location.state.writer;
            if(getValues("title") !== ""){
                const { data: { ModifyPost: {check, status} } } = await setPostMutation({
                    variables: {
                        postId: Number(postId),
                        title: getValues("title"),
                    }
                });
 
                if(postData !== "" && check){

                    const formData = new FormData();
         
                    formData.append("writer", writer);
                    formData.append("postId", postId);
                    formData.append("title", getValues("title"));
                    formData.append("editor", postData);

                    writePostApi(formData).then(
                        data => {
                            console.log(data)
                        }
                    )
                    alert("내용이 변경되었습니다.")
                    window.location.replace(`/detail/${postId}`)
                }
            }else{
                alert("제목을 입력하세요.")
            }
        }catch(error){
            console.log(error);
        }
    }

    const init = async() => {
        const formData = {
            writer: history.location.state.writer,
            postId: postId
        }
        getPostApi(formData).then(
            data => {
                // console.log(data)
                editorRef.current.getInstance().setHTML(data.data)
            }
        )
    }

    return (
        <ModifyPostPresenter 
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            onSubmit={onSubmit}
            editorRef={editorRef}
        />
    );

}
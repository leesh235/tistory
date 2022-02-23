import React, { useRef } from 'react';
import { WRITEPOST } from '../querys/WritePostQuery';
import { useMutation } from "@apollo/client";
import { useForm } from 'react-hook-form';
import { PostForm } from '../components/Form/PostForm';
import { writePostApi } from "../api";

export const WritePostContainer = () => {

    const [postMutation] = useMutation(WRITEPOST);
    const { register, setValue, handleSubmit, getValues, setError, formState: { errors } } = useForm({ mode:"onBlur" });
    const editorRef = useRef<any>();

    const onSubmit = async() => {
        console.log("submit post");

        const postData = editorRef.current.getInstance().getHTML();
        try{
            if(getValues("title") === ""){
                alert("제목을 입력하세요");
                return;
            }
            const contents = postData !== "" ? true : false;
            console.log(contents)
            const { data: { createPost : {postInfo, status, check} } } = await postMutation({
                variables: {
                    title: getValues("title"),
                    contents: contents
                }
            });

            if(contents){
                const title = getValues("title");

                const formValue: {
                    writer: string,
                    postId: number,
                    title: string,
                    editor: any,
                } = {
                    writer: postInfo.writer,
                    postId: Number(postInfo.postId),
                    title: title,
                    editor: postData,
                }

                writePostApi(formValue).then(
                    data => {
                        console.log(data);
                    },
                    err => {
                        console.log(err);
                    }
                )
            }
            alert("작성 완료");
            window.location.replace("/");
        } catch(error){
            console.log(error);
        }
    }

    return(
        <PostForm 
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            onSubmit={onSubmit}
            editorRef={editorRef}
            setValue={setValue}
        />
    );
}
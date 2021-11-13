import React, { useRef } from 'react';
import { useMutation } from "@apollo/client";
import { ADD } from "./AddQuery";
import { AddPresenter } from './AddPresenter';
import { useForm } from 'react-hook-form';
import { writePostApi } from "../../api";
import { isLogedIn } from "../../utiles";
import { useHistory } from 'react-router';

export const AddContainer = () => {

    const history = useHistory()

    if(!isLogedIn()){
        window.alert("로그인이 필요합니다")
        history.push("/login");
    }

    const { register, setValue, handleSubmit, getValues, setError, formState: { errors } } = useForm({ mode:"onBlur" });

    const editorRef = useRef<any>();

    const [AddMutation] = useMutation(ADD);

    const onSubmit = async() => {
     
        const postData = editorRef.current.getInstance().getHTML();
        try{
            if(getValues("title") === ""){
                alert("제목을 입력하세요");
                return;
            }
            const contents = postData !== "" ? true : false;
            console.log(contents)
            const { data: { createPost : {postInfo, status, check} } } = await AddMutation({
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

    return (
        
        <AddPresenter 
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            onSubmit={onSubmit}
            editorRef={editorRef}
        />
 
    );
}
import React, { useRef } from 'react';
import { useMutation } from "@apollo/client";
import { ADD } from "./AddQuery";
import AddPresenter from './AddPresenter';
import { useForm } from 'react-hook-form';
import { writePostApi } from "../../api";
import { isLogedIn } from "../../utiles";
import { useHistory } from 'react-router';

const AddContainer = () => {

    const history = useHistory()

    if(!isLogedIn()){
        window.alert("로그인이 필요합니다")
        history.push("/login");
    }

    const { register, setValue, handleSubmit, getValues, setError, formState: { errors } } = useForm({ mode:"onBlur" });

    const editorRef = useRef();

    const [AddMutation] = useMutation(ADD);

    const onSubmit = async() => {
     
        const postData = editorRef.current.getInstance().getHTML();
        // console.log(postData);
        try{
            if(getValues("title") === ""){
                alert("제목을 입력하세요");
                return;
            }
            const { data: { createPost : {postId, status, writer} } } = await AddMutation({
                variables: {
                    title: getValues("title"),
                    contents: postData !== "" ? "exist" : ""
                }
            });
            // console.log("postId: ", postId, status, writer);

            if(postData !== "" && status === "success"){

                const formData = new FormData();

                formData.append("postId", postId);
                formData.append("writer", writer);
                formData.append("title", getValues("title"));
                formData.append("editor", postData);

                writePostApi(formData).then(
                    data => {
                        console.log(data);
                    },
                    err => {
                        console.log(err)
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

export default AddContainer;
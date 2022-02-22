import React, { useRef } from 'react';
import { WRITEPOST } from '../querys/WritePostQuery';
import { useMutation } from "@apollo/client";
import { useForm } from 'react-hook-form';
import { PostForm } from '../components/Form/PostForm';

export const WritePostContainer = () => {

    const [postMutation] = useMutation(WRITEPOST);
    const { register, setValue, handleSubmit, getValues, setError, formState: { errors } } = useForm({ mode:"onBlur" });
    const editorRef = useRef<any>();

    const onSubmit = () => {
        console.log("submit post");
    }

    return(
        <PostForm 
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            onSubmit={onSubmit}
            editorRef={editorRef}
        />
    );
}
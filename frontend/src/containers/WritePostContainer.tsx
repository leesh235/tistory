import React, { useState, useEffect, useRef } from 'react';
import { WRITEPOST } from '../querys/PostQuery';
import { useMutation, useQuery } from "@apollo/client";
import { useForm } from 'react-hook-form';
import { PostForm } from '../components/Form/PostForm';
import { BAGICCATEGORYLIST } from '../querys/CategoryQuery';
import { writePostApi } from "../api";

export const WritePostContainer = () => {

    const { register, setValue, handleSubmit, getValues, setError, formState: { errors } } = useForm({ mode:"onChange" });
    const editorRef = useRef<any>();
    
    const { loading, data, error } = useQuery(BAGICCATEGORYLIST);
    const [postMutation] = useMutation(WRITEPOST);
    
    const [categoryList, setCategoryList] = useState<Array<string>>();

    const onSubmit = async() => {
        try{
            const postData = editorRef.current.getInstance().getHTML();
            
            const { data } = await postMutation({
                variables: {
                    title: getValues("title"),
                    categoryName: getValues("category")
                }
            });

            if(postData !== "" && data.writePost.__typename === "WritePostSuccess"){
                const title = getValues("title");

                const formValue: {
                    postId: number,
                    title: string,
                    editor: any,
                } = {
                    postId: Number(data.writePost.data.id),
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

    useEffect(() => {
        if(data?.getBagicCategoryList?.__typename === "BagicCategoryListSuccess"){
            let arr: Array<string> = data?.getBagicCategoryList?.data.map((val: any) => {
                return val["name"];
            })
            setCategoryList(arr);
        }
    },[loading])

    return(
        <PostForm 
            mode={"post"}
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            onSubmit={onSubmit}
            editorRef={editorRef}
            setValue={setValue}
            categoryList={categoryList}
        />
    );
}
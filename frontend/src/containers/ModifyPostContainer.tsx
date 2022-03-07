import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { MODIFYPOST } from "../querys/ModifyPostQuery";
import { POST } from "../querys/PostQuery";
import { Error } from "../components/common/Error";
import { Loading } from "../components/common/Loding";
import { routes } from "../routes";
import { PostForm } from "../components/Form/PostForm";
import { getPostApi, writePostApi } from "../api";

interface Post {
    postId: number,
    title: string,
    category: string,
}

export const ModifyPostContainer = () => {

    const { register, setValue, handleSubmit, getValues, setError, formState: { errors } } = useForm<Post>({ mode:"onBlur" });

    const { id } = useParams<{id: string}>();
    const editorRef = useRef<any>();

    const { loading, data, error } = useQuery(POST, {
        variables: {
            postId: Number(id)
        }
    });
    const [postMutation] = useMutation(MODIFYPOST);

    const onSubmit = async() => {
        try{
            const postData = editorRef.current.getInstance().getHTML();

            if(window.confirm("정보를 변경하시겠습니까?")){
                const result = await postMutation({
                    variables: {
                        postId: Number(id),
                        title: getValues("title")
                    }
                });
                console.log(result)

                if(postData !== "" && result?.data?.modifyPost?.__typename === "ModifyPostSuccess"){
                    const title = getValues("title");
                    console.log(title)
                    const formValue: {
                        postId: number,
                        title: string,
                        editor: any,
                    } = {
                        postId: Number(id),
                        title: title,
                        editor: postData,
                    }
    
                    writePostApi(formValue).then(
                        data => {
                            console.log("data")
                            console.log(data);
                        },
                        err => {
                            console.log("err")
                            console.log(err);
                        }
                    )
                }
                window.location.replace(`${routes.detail}${id}`);
            }
        }catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        if(data?.getPostDetail?.__typename === "PostSuccess"){
            setValue("title", data?.getPostDetail?.data.title);
            setValue("category", data?.getPostDetail?.data.category);
            if(data?.getPostDetail?.data.contentsUrl){
                getPostApi(data?.getPostDetail?.data.contentsUrl).then(
                    data => {
                        editorRef.current.getInstance().setHTML(data.data);
                    }
                )
            }
        }
    },[])

    if(loading){
        return <Loading />
    }else if(error){
        return <Error />
    }else{
        return (
            <PostForm 
                mode={"modify"}
                register={register}
                handleSubmit={handleSubmit}
                errors={errors}
                onSubmit={onSubmit}
                editorRef={editorRef}
                setValue={setValue}
            />
        );
    }
}
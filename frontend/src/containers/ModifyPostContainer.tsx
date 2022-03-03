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
            if(window.confirm("정보를 변경하시겠습니까?")){
                const result = await postMutation({
                    variables: {
                        postId: Number(id),
                        title: getValues("title")
                    }
                });

                if(result.data?.modifyPost?.__typename === "ModifyPostSuccess"){
                    window.location.replace(`${routes.detail}${id}`);
                }else{
                    alert(result.data?.modifyPost.message);
                }
            }
        }catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        if(data?.getPostDetail?.__typename === "PostSuccess"){
            setValue("title", data?.getPostDetail?.data.title);
            setValue("category", data?.getPostDetail?.data.category);
            editorRef.current.getInstance().setHTML(data?.getPostDetail?.data.contentsUrl)
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
import React from 'react';
import { useMutation } from '@apollo/client';
import { MODIFYPOST } from "./ModifyPostQuery";
import ModifyPostPresenter from './ModifyPostPresenter';
import useInput from "../../Hooks/useInput";
import { useParams } from "react-router-dom";

export default () => {

    const {postId} = useParams();

    const titleInput = useInput("");
    const contentsInput = useInput("");

    const [setPostMutation] = useMutation(MODIFYPOST, {
        variables: {
            postId,
            title: titleInput.value,
            contents: contentsInput.value
        }
    })

    const onSubmit = async(e) => {
        e.preventDefault();

        try{

            if(titleInput.value !== ""){
                const { data: { ModifyPost } } = await setPostMutation();

                if(ModifyPost){
                    alert("내용이 변경되었습니다.")
                    window.location.replace(`/detail/${postId}`);
                }

            }else{
                alert("제목을 입력하세요.")
            }

        }catch(error){
            console.log(error);
        }
    }

    return (
        <ModifyPostPresenter 
            title={titleInput}
            contents={contentsInput}
            onSubmit={onSubmit}
        />
    );

}
import React from 'react';
import { useMutation } from "@apollo/client";
import { ADD } from "./AddQuery";
import AddPresenter from './AddPresenter';
import useInput from '../../Hooks/useInput';
import { useHistory } from "react-router-dom";

const AddContainer = () => {

    const titleInput = useInput("");
    const contentsInput = useInput("");

    const [AddMutation] = useMutation(ADD, {
        variables: {
            title: titleInput.value,
            contents: contentsInput.value
        }
    });

    const history = useHistory();

    const onSubmit = async(e) => {
        e.preventDefault();

        try{
            if(titleInput.value !== ""){
                const { data: createPost } = await AddMutation();
                if(createPost){
                    alert("작성 완료");
                    history.push("/");
                }
            }else {
                alert("제목을 작성해주세요.");
            }
        } catch(error){
            console.log(error);
        }
    }

    return (
        <AddPresenter 
            title={titleInput}
            contents={contentsInput}
            onSubmit={onSubmit}
        />
    );
}

export default AddContainer;
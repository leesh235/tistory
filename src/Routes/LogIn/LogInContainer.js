import React from 'react';
import { useMutation } from '@apollo/client';
import LogInPresenter from './LogInPresenter';
import { useHistory } from "react-router-dom";
import useInput from "../../Hooks/useInput";
import { LOGIN, TOKENLOGIN } from "./LogInQuery";
export default () => {
    
    const idInput = useInput("");
    const passInput = useInput("");

    const [loginMutation] = useMutation(LOGIN, {
        variables: {
            email: idInput.value,
            password: passInput.value
        }
    });
    const [tokenMutation] = useMutation(TOKENLOGIN);

    const history = useHistory();

    const onSubmit = async(e) => {
        e.preventDefault();
        try{
            if(idInput.value !== "" && passInput.value !== ""){
                const {
                    data: {login: token}
                } = await loginMutation();

                if(token !== "" || token !== "undefined"){
                    await tokenMutation({
                        variables: {token}
                    });
                    setTimeout(() => {
                        history.push("/")
                    }, 2000);
                }
            } 
        }catch (error) {
            console.log(error);
        }
    }

    return (
        <LogInPresenter 
            id={idInput} 
            password={passInput} 
            onSubmit={onSubmit}
        />
    );
}
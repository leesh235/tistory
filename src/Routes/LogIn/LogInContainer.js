import React from 'react';
import { useMutation } from '@apollo/client';
import LogInPresenter from './LogInPresenter';
import { useHistory } from "react-router-dom";
import useInput from "../../Hooks/useInput";
import { LOGIN, TOKENLOGIN } from "./LogInQuery";
import { useDispatch } from "react-redux";
import { setUserId } from "../../redux/actions/user";

export default () => {
    
    const idInput = useInput("");
    const passInput = useInput("");

    const dispatch = useDispatch();

    const [loginMutation] = useMutation(LOGIN, {
        variables: {
            userId: idInput.value,
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
                    data: {login: {token, userId}}
                } = await loginMutation();

                dispatch(setUserId(userId));

                if(token !== null || token !== null){
                    dispatch(setUserId(userId));

                    await tokenMutation({
                        variables: {
                            token
                        }
                    });
                    setTimeout(() => {
                        history.push("/")
                    }, 500);

                }else{
                    window.alert("아이디가 없거나 비밀번호가 틀렸습니다.");
                }
            } else{
                window.alert("아이디, 비밀번호를 입력하세요");
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
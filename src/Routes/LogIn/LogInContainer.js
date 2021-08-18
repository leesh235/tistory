import React from 'react';
import { useMutation } from '@apollo/client';
import LogInPresenter from './LogInPresenter';
import { useHistory } from "react-router-dom";
import useInput from "../../Hooks/useInput";
import { LOGIN, TOKENLOGIN } from "./LogInQuery";
import { useDispatch } from "react-redux";
import { setUserId } from "../../redux/actions/user";

export default () => {
    
    const emailInput = useInput("");
    const passwordInput = useInput("");

    const dispatch = useDispatch();

    const [loginMutation] = useMutation(LOGIN);
    const [tokenMutation] = useMutation(TOKENLOGIN);

    const history = useHistory();

    const onSubmit = async(e) => {
        e.preventDefault();
        try{
            if(emailInput.value !== "" && passwordInput.value !== ""){
                const {
                    data: {login: {
                        email,
                        nickName,
                        userRole,
                        token,
                        status
                    }}
                } = await loginMutation({
                    variables: {
                        userId: emailInput.value,
                        password: passwordInput.value
                    }
                });

                // dispatch(setUserId(userId));

                if(token !== null){
                    // dispatch(setUserId(userId));

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
            id={emailInput} 
            password={passwordInput} 
            onSubmit={onSubmit}
        />
    );
}
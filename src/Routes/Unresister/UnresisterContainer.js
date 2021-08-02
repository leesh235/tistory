import React from 'react';
import UnresisterPresenter from './UnresisterPresenter';
import { useMutation } from '@apollo/client';
import { UNRESISTER } from "./UnresisterQuery";
import { useInput } from "../../Hooks/useInput";

const UnresisterContainer = ({props}) => {
    const { state } = props.history.location
    console.log(state)
    const [setUnresister] = useMutation(UNRESISTER);

    const password = useInput("");

    const onClick = async() => {
        if(window.confirm("회원탈퇴를 하시겠습니다?")){
            await setUnresister({
                variables:{
                    userId: state.userInfo.userId,
                    password
                }
            })
        }
    }

    return(
            <UnresisterPresenter 
                password={password}
                onClick={onClick}
            />
    );
}

export default UnresisterContainer;
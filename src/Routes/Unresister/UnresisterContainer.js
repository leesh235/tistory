import React from 'react';
import UnresisterPresenter from './UnresisterPresenter';
import { useMutation } from '@apollo/client';
import { UNRESISTER } from "./UnresisterQuery";
import useInput from "../../Hooks/useInput";
import { TOKENLOGOUT } from "../../apollo/tokenQuery";

const UnresisterContainer = ({props}) => {

    const { state } = props.history.location
    // console.log(state)
    const [setUnresister] = useMutation(UNRESISTER);
    const [tokenMutation] = useMutation(TOKENLOGOUT);

    const password = useInput("");
    const passwordConfirm = useInput("");

    const onClick = async() => {
        if(password.value !== passwordConfirm.value){
            window.alert("비밀번호가 다릅니다.")
        }else{
            if(window.confirm("회원탈퇴를 하시겠습니다?")){
                const { data : {Unresister : { check, status } } } = await setUnresister({
                    variables:{
                        email: state.userInfo.email,
                        password: password.value
                    }
                })
                if(check){
                    await tokenMutation();
                    window.location.replace("/");
                }else{
                    window.alert("비밀번호가 틀렸습니다.")
                }
            }
        }
    }

    return(
            <UnresisterPresenter 
                password={password}
                passwordConfirm={passwordConfirm}
                onClick={onClick}
            />
    );
}

export default UnresisterContainer;
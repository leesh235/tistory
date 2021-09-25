import React from "react";
import styled from "styled-components";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 150px 0 0 0;
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 80%;
    }
`;

const ImgIn = styled.input`
    margin-bottom: 20px;
`;

export default ({ password, passConfirm, handlePicture, onSubmit }) => {
    return (
        <Wrapper>
            <form>
                <ImgIn type="file" onChange={handlePicture} />
                <Input placeholder={"  비밀번호"} w={"60%"} h={"3rem"} fs={"1.5rem"} func={password} type={"password"} margin={"10px 0 10px 0"}></Input>
                <Input placeholder={"  비밀번호 확인"} w={"60%"} h={"3rem"} fs={"1.5rem"} func={passConfirm} type={"password"} margin={"10px 0 10px 0"}></Input>
                <Button text={"변경하기"} color={"white"} fcolor={"#8e8e8e"} fs={"2rem"} onClick={onSubmit} m={"20px 0 0 0"}/>              
            </form>
        </Wrapper>
    );
}
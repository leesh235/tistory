import React from "react";
import styled from "styled-components";

const Input = styled.input`
    height: 40px;
    background-color: #ffffff;
    border: solid 1px #dadada;
    margin-bottom: 15px;
    font-size: 15px;
    padding: 10px;
`;

const Button = styled.button`
    width: 460px;
    height: 60px;
    background-color: #white;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #8e8e8e;
    margin-top: 15px;
    margin-bottom: 15px;
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
`;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    form {
        display: flex;
        margin-bottom: 10px;
        flex-direction: column;
    }
`;

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80vh;
    flex-direction: column;
`;

export default ({ id, password, passConfirm, name, onSubmit }) => {
    return (
        <Wrapper>
            <Container>
                <form onSubmit={onSubmit}>
                    <Input placeholder={"  아이디"} {...id}></Input>
                    <Input placeholder={"  비밀번호"} {...password} type={"password"}></Input>
                    <Input placeholder={"  비밀번호 확인"} {...passConfirm} type={"password"}></Input>
                    <Input placeholder={"  이름"} {...name}></Input>
                    <Button>가입하기</Button>                    
                </form>
            </Container>
        </Wrapper>
    );
}
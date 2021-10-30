import React from "react";
import styled from "styled-components";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

const Wrapper = styled.section`
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

export default ({ register, handleSubmit, errors, onSubmit }) => {
    return (
        <Wrapper>
            <Container>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input type={"text"} register={register("email")} placeholder={"  email"} />
                    <Input type={"text"} register={register("nickName")} placeholder={"  닉네임"} />
                    <Input type={"password"} register={register("password1")} placeholder={"  비밀번호"} />
                    <Input type={"password"} register={register("password2")} placeholder={"  비밀번호 확인"} />
                    <Button text={"가입하기"}/>               
                </form>
            </Container>
        </Wrapper>
    );
}
import React from "react";
import styled from "styled-components";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Text } from "../../components/Text";
import { ErrorMessage } from "../../components/ErrorMessage";

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 70vh;
`;

const FormWrapper = styled.form`
    max-width: 37rem;
    width: 70vw;
    display: flex;
    flex-direction: column;
`;

interface Props {
    register: any,
    handleSubmit: any,
    errors: any,
    onSubmit: any,
}

export const ForgetPresenter = ({register, handleSubmit, errors, onSubmit}: Props) => {
    return (
        <Wrapper>
            <FormWrapper onSubmit={handleSubmit(onSubmit)}>
                <Input type={"text"} register={register("email",{required: true})} w={"100%"} placeholder={"email"} />
                <ErrorMessage>
                    {errors.email?.type === "required" && <Text type={"p"} text={"이메일을 입력해주세요"} fs={"1rem"} fc={"red"}/>}
                </ErrorMessage>

                <Button text={"보내기"} w={"100%"}/>               
            </FormWrapper>
        </Wrapper>
    );
}
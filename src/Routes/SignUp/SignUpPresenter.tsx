import React from "react";
import styled from "styled-components";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Text } from "../../components/Text";
import { ErrorMessage } from "../../components/ErrorMessage";

const Wrapper = styled.section`
    height: 70vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
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

export const SignUpPresenter = ({ register, handleSubmit, errors, onSubmit }: Props) => {
    return (
        <Wrapper>
            <FormWrapper onSubmit={handleSubmit(onSubmit)}>
                <Input type={"text"} register={register("email",{required: true})} w={"100%"} placeholder={"email"} />
                <ErrorMessage>
                    {errors.email?.type === "required" && <Text type={"p"} text={"이메일을 입력해주세요"} fs={"1rem"} fc={"red"}/>}
                </ErrorMessage>

                <Input type={"text"} register={register("nickName",{required: true})} w={"100%"} placeholder={"닉네임"} />
                <ErrorMessage>
                    {errors.nickName?.type === "required" && <Text type={"p"} text={"닉네임을 입력해주세요"} fs={"1rem"} fc={"red"}/>}
                </ErrorMessage>

                <Input type={"password"} register={register("password",{required: true})} w={"100%"} placeholder={"비밀번호"} />
                <ErrorMessage>
                    {errors.password?.type === "required" && <Text type={"p"} text={"비밀번호를 입력해주세요"} fs={"1rem"} fc={"red"}/>}
                </ErrorMessage>

                <Input type={"password"} register={register("confirmPassword",{required: true})} w={"100%"} placeholder={"비밀번호 확인"} />
                <ErrorMessage>
                    {errors.confirmPassword?.type === "required" && <Text type={"p"} text={"비밀번호를 한번 더 입력해주세요"} fs={"1rem"} fc={"red"}/>}
                </ErrorMessage>

                <ErrorMessage>
                    {errors.confirmPassword?.type === "required" && <Text type={"p"} text={"비밀번호가 다릅니다"} fs={"1rem"} fc={"red"}/>}
                </ErrorMessage>

                <Button text={"가입하기"} w={"100%"}/>               
            </FormWrapper>
        </Wrapper>
    );
}
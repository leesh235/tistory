import React from 'react';
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

export const UnresisterPresenter = ({ register, handleSubmit, errors, onSubmit }: Props) => {
        return(
            <Wrapper>
                <FormWrapper onSubmit={handleSubmit(onSubmit)}>

                    <Input type={"password"} register={register("password",{ require: true })} w={"100%"} placeholder={"비밀번호"} />
                    <ErrorMessage>
                        {errors.password?.type === "required" && <Text type={"p"} text={"비밀번호를 입력해주세요"} fs={"1rem"} fc={"red"}/>}
                    </ErrorMessage>

                    <Input type={"password"} register={register("confirmPassword",{ require: true })} w={"100%"} placeholder={"비밀번호 확인"} />
                    <ErrorMessage>
                        {errors.confirmPassword?.type === "required" && <Text type={"p"} text={"비밀번호를 한번 더 입력해주세요"} fs={"1rem"} fc={"red"}/>}
                    </ErrorMessage>

                    <ErrorMessage>
                        {/* {errors.confirmPassword?.type === "required" && <Text type={"p"} text={"비밀번호가 다릅니다"} />} */}
                    </ErrorMessage>

                    <Button text={"변경하기"} w={"100%"}/>               
                </FormWrapper>
            </Wrapper>
        );
}
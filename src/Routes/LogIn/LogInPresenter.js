import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ErrorMessage } from "../../components/ErrorMessage";
import { Text } from "../../components/Text";
import { FlexWrapper } from "../../components/FlexWrapper";

const Wrapper = styled.section`
    height: 70vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const FormWrapper = styled.form`
    max-width: 37rem;
    width: 70vw;
    display: flex;
    flex-direction: column;
`;

export default ({ register, handleSubmit, errors, onSubmit }) => {
    return (
        <Wrapper>
            <FormWrapper onSubmit={handleSubmit(onSubmit)}>
                <Input type={"text"} register={register("email",{required: true})} w={"100%"} placeholder={"email"} />
                <ErrorMessage>
                    {errors.email?.type === "required" && <Text type={"p"} text={"이메일을 입력해주세요"} fs={"1rem"} fc={"red"}/>}
                </ErrorMessage>

                <Input type={"password"} register={register("password",{required: true})} w={"100%"} placeholder={"비밀번호"} />
                <ErrorMessage>
                    {errors.password?.type === "required" && <Text type={"p"} text={"비밀번호를 입력해주세요"} fs={"1rem"} fc={"red"}/>}
                </ErrorMessage>

                <Button text={"로그인"} w={"100%"}/>               
            </FormWrapper>

            <FlexWrapper fd={"column"} w={"auto"} ai={"center"} m={"30px 0 0 0"} props={`
                >:nth-child(1){
                    margin-bottom: 10px;
                }
            `}>
                <Link to="/signup">
                    <Text type={"p"} text={"회원가입"} />
                </Link>
                <Link to="/forget">
                    <Text type={"p"} text={"비밀번호찾기"} />
                </Link>
            </FlexWrapper>
        </Wrapper>
    );
}
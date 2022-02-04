import styled from "styled-components";
import { Link } from "react-router-dom";
import { Input } from "./Input";
import { Button } from "./Button";
import { ErrorMessage } from "./ErrorMessage";
import { Text } from "./Text";
import { FlexWrapper } from "./FlexWrapper";
import { emailPattern, passwordPattern } from "../regex";

const Wrapper = styled.article`
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

interface Props {
    register: any,
    handleSubmit: any,
    errors: any,
    onSubmit: any,
}

export const LogInForm = ({ register, handleSubmit, errors, onSubmit }: Props) => {
    return (
        <Wrapper>
            <FormWrapper onSubmit={handleSubmit(onSubmit)}>
                <Input type={"text"} register={register("email",{required: true, pattern: emailPattern})} w={"100%"} placeholder={"email"} />
                <ErrorMessage>
                    {errors.email?.type === "required" && <Text type={"p"} text={"이메일을 입력해주세요"} fs={"1rem"} fc={"red"}/>}
                    {errors.email?.type === "pattern" && <Text type={"p"} text={"이메일 형식이 아닙니다"} fs={"1rem"} fc={"red"}/>}
                </ErrorMessage>

                <Input type={"password"} register={register("password",{required: true, pattern: passwordPattern})} w={"100%"} placeholder={"비밀번호"} />
                <ErrorMessage>
                    {errors.password?.type === "required" && <Text type={"p"} text={"비밀번호를 입력해주세요"} fs={"1rem"} fc={"red"}/>}
                    {errors.password?.type === "pattern" && <Text type={"p"} text={"8~16자 이내로 입력해주세요"} fs={"1rem"} fc={"red"}/>}
                </ErrorMessage>

                <Button text={"로그인"} w={"100%"}/>               
            </FormWrapper>

            <FlexWrapper fd={"column"} w={"auto"} ai={"center"} margin={"30px 0 0 0"} props={`
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
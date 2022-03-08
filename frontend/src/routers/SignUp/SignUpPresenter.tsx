import styled from "styled-components";
import { Input } from "../../components/common/Input";
import { Button } from "../../components/common/Button";
import { Text } from "../../components/common/Text";
import { ErrorMessage } from "../../components/common/ErrorMessage";
import { emailPattern, passwordPattern } from "../../regex";

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
    getValues: any,
}

export const SignUpPresenter = ({ register, handleSubmit, errors, onSubmit, getValues }: Props) => {
    return (
        <Wrapper>
            <FormWrapper onSubmit={handleSubmit(onSubmit)}>
                <Input type={"text"} register={register("email",{required: true, pattern: emailPattern})} width={"100%"} placeholder={"email"} />
                <ErrorMessage>
                    {errors.email?.type === "required" && <Text type={"p"} text={"이메일을 입력해주세요"} fs={"1rem"} fc={"red"}/>}
                    {errors.email?.type === "pattern" && <Text type={"p"} text={"이메일 형식이 아닙니다"} fs={"1rem"} fc={"red"}/>}
                </ErrorMessage>

                <Input type={"text"} register={register("nickName",{required: true})} width={"100%"} placeholder={"닉네임"} />
                <ErrorMessage>
                    {errors.nickName?.type === "required" && <Text type={"p"} text={"닉네임을 입력해주세요"} fs={"1rem"} fc={"red"}/>}
                </ErrorMessage>

                <Input type={"password"} register={register("password",{required: true,  pattern: passwordPattern})} width={"100%"} placeholder={"비밀번호"} />
                <ErrorMessage>
                    {errors.password?.type === "required" && <Text type={"p"} text={"비밀번호를 입력해주세요"} fs={"1rem"} fc={"red"}/>}
                     {errors.password?.type === "pattern" && <Text type={"p"} text={"8~16자 이내로 입력해주세요"} fs={"1rem"} fc={"red"}/>}
                </ErrorMessage>

                <Input type={"password"} register={register("confirmPassword",{required: true, validate: (value: string) => value === getValues("password")})} width={"100%"} placeholder={"비밀번호 확인"} />
                <ErrorMessage>
                    {errors.confirmPassword?.type === "required" && <Text type={"p"} text={"비밀번호를 한번 더 입력해주세요"} fs={"1rem"} fc={"red"}/>}
                    {errors.confirmPassword?.type === "required" && <Text type={"p"} text={"비밀번호가 일치하지 않습니다"} fs={"1rem"} fc={"red"}/>}
                </ErrorMessage>

                <Button text={"가입하기"} width={"100%"}/>               
            </FormWrapper>
        </Wrapper>
    );
}
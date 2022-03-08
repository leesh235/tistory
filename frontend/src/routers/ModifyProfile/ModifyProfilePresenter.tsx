import React from "react";
import styled from "styled-components";
import { Button } from "../../components/common/Button";
import { Input } from "../../components/common/Input";
import { FlexWrapper } from "../../components/common/FlexWrapper";
import { Text } from "../../components/common/Text";
import { ErrorMessage } from "../../components/common/ErrorMessage";

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

const ImgIn = styled.input`
    max-width: 37rem;
    width: 70vw;
    margin-bottom: 20px;
`;

interface Props {
    register: any,
    handleSubmit: any,
    errors: any,
    onSubmit: any,
    handlePicture: (e: React.ChangeEvent<HTMLInputElement>) => any,
}

export const ModifyProfilePresenter = ({ register, handleSubmit, errors, handlePicture, onSubmit }: Props) => {
    return (
        <Wrapper>

            <ImgIn type="file" onChange={handlePicture} />
            <FormWrapper onSubmit={handleSubmit(onSubmit)}>

                <Input type={"password"} register={register("password")} width={"100%"} placeholder={"비밀번호"} />
                <ErrorMessage>
                    {/* {errors.password?.type === "required" && <Text type={"p"} text={"비밀번호를 입력해주세요"} />} */}
                </ErrorMessage>

                <Input type={"password"} register={register("confirmPassword")} width={"100%"} placeholder={"비밀번호 확인"} />
                <ErrorMessage>
                    {/* {errors.confirmPassword?.type === "required" && <Text type={"p"} text={"비밀번호를 한번 더 입력해주세요"} />} */}
                </ErrorMessage>

                <ErrorMessage>
                    {/* {errors.confirmPassword?.type === "required" && <Text type={"p"} text={"비밀번호가 다릅니다"} />} */}
                </ErrorMessage>

                <Button text={"변경하기"} width={"100%"}/>               
            </FormWrapper>
        </Wrapper>
    );
}
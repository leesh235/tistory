import styled from 'styled-components';
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { FlexWrapper } from "../../components/FlexWrapper";
import { ToastEditor } from '../../components/ToastEditor';

const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    height: auto;
    margin: 50px 0;
`;

const EditorWrapper = styled.article`
    width: 100%;
`;

interface Props {
    register: any,
    handleSubmit: any,
    errors: any,
    onSubmit: any,
    editorRef: any,
}

export const AddPresenter = ({ register, handleSubmit, errors, onSubmit, editorRef }: Props) => {
  
    return (
        <Wrapper>
            <FormWrapper onSubmit={handleSubmit(onSubmit)}>
                <Input type={"text"} register={register("title",{require: true})} maxW={"60rem"} w={"100%"} margin={"0 0 20px 0"} placeholder={"제목"}/>

                <ToastEditor editorRef={editorRef}/>

                <FlexWrapper display={"flex"} jc={"flex-end"} w={"100%"}>
                    <Button text={"완료"} w={"7rem"} h={"4rem"} margin={"30px 0 0 0"} />
                </FlexWrapper>
            </FormWrapper>
        </Wrapper>
    );
}
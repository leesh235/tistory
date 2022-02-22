import styled from 'styled-components';
import { PC, Tablet, Mobile } from '../../utils/responsive';
import { ToastEditor } from '../ToastEditor';
import { Input } from '../Input';

const Wrapper = styled.section`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
`;

interface Props {
    register: any,
    handleSubmit: any,
    errors: any,
    onSubmit: any,
    editorRef: any,
}

export const PostForm = ({ register, handleSubmit, errors, onSubmit, editorRef } : Props) => {
    return(
        <Wrapper>
            <Input type={"text"} register={register("title",{require: true})} maxW={"100%"} w={"100%"} placeholder={"제목"}/>
            <ToastEditor editorRef={editorRef}/>
        </Wrapper>
    );
}
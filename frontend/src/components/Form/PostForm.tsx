import styled from 'styled-components';
import { PC, Tablet, Mobile } from '../../utils/responsive';
import { ToastEditor } from '../ToastEditor';
import { Input } from '../common/Input';
import { Button } from '../common/Button';

const Wrapper = styled.section`
    width: 100%;
    height: auto;
    >form{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: auto;
    }
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
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input type={"text"} register={register("title",{require: true})} maxW={"100%"} width={"100%"} placeholder={"제목"}/>
                <ToastEditor editorRef={editorRef}/>
                <Button text={"완료"}/>
            </form>
        </Wrapper>
    );
}
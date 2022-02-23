import styled from 'styled-components';
import { PC, Tablet, Mobile } from '../../utils/responsive';
import { ToastEditor } from '../ToastEditor';
import { Input } from '../common/Input';
import { Button } from '../common/Button';
import { Select } from '../common/Select';

const Wrapper = styled.section`
    width: 100%;
    height: auto;
    >form{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: auto;
        >:nth-child(n){
            margin: 10px 0;
        }
    }
`;

interface Props {
    register: any,
    handleSubmit: any,
    errors: any,
    onSubmit: any,
    editorRef: any,
    setValue: any,
}

export const PostForm = ({ register, setValue, handleSubmit, errors, onSubmit, editorRef } : Props) => {
    return(
        <Wrapper>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input type={"text"} register={register("title",{require: true})} width={"100%"} placeholder={"제목"}/>
                <Select  width={"100%"} inputName={"category"} register={register("category",{require: true})} setValue={setValue}/>
                <ToastEditor editorRef={editorRef}/>
                <Button text={"완료"} width={"100%"}/>
            </form>
        </Wrapper>
    );
}
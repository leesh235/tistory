import styled from 'styled-components';
import { PC, Tablet, Mobile } from '../../utils/responsive';
import { ToastEditor } from '../ToastEditor';
import { Input } from '../common/Input';
import { Button } from '../common/Button';
import { Select } from '../common/Select';
import { ErrorMessage } from '../ErrorMessage';
import { Text } from '../common/Text';

const Wrapper = styled.section`
    width: 100%;
    height: auto;
    >form{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: auto;
        margin-bottom: 30px;
    }
`;

interface Props {
    register: any,
    handleSubmit: any,
    errors: any,
    onSubmit: () => void,
    editorRef: any,
    setValue: any,
    categoryList?: Array<string>
}

export const PostForm = ({ register, setValue, handleSubmit, errors, onSubmit, editorRef, categoryList } : Props) => {
    return(
        <Wrapper>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input type={"text"} register={register("title",{required: true})} width={"100%"} placeholder={"제목"}/>

                <ErrorMessage>
                    {errors.title?.type === "required" && <Text text={"제목을 입력해주세요."} fs={"1rem"} fc={"red"}/>}
                </ErrorMessage>

                <Select  width={"100%"} inputName={"category"} register={register("category",{required: true})} setValue={setValue} option={categoryList}/>

                
                <ErrorMessage>
                    {errors.category?.type === "required" && <Text text={"카테고리를 선택해주세요."} fs={"1rem"} fc={"red"}/>}
                </ErrorMessage>

                <ToastEditor editorRef={editorRef}/>
                <Button text={"완료"} type={"submit"} width={"100%"} height={"45px"}/>
            </form>
        </Wrapper>
    );
}
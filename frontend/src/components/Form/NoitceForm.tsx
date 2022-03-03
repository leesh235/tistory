import styled from 'styled-components';
import { Input } from '../common/Input';
import { Button } from '../common/Button';
import { ErrorMessage } from '../ErrorMessage';
import { Text } from '../common/Text';

const Wrapper = styled.section`
    width: 100%;
    height: auto;
    >form{
        display: flex;
        flex-direction: column;
        align-items: center;
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
}

export const NoitceForm = ({ register, handleSubmit, errors, onSubmit } : Props) => {
    return(
        <Wrapper>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input type={"text"} register={register("title",{required: true})} width={"100%"} placeholder={"제목"}/>

                <ErrorMessage>
                    {errors.title?.type === "required" && <Text text={"제목을 입력해주세요."} fs={"1rem"} fc={"red"}/>}
                </ErrorMessage>

                <Input type={"text"} register={register("contents",{required: true})} width={"100%"} placeholder={"내용"}/>

                <ErrorMessage>
                    {errors.contents?.type === "required" && <Text text={"내용을 입력해주세요."} fs={"1rem"} fc={"red"}/>}
                </ErrorMessage>
                
                <Button text={"완료"} type={"submit"} maxW={"100%"} width={"100%"} height={"45px"}/>
            </form>
        </Wrapper>
    );
}
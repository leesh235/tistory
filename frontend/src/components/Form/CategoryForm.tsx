import styled from 'styled-components';
import { Input } from '../common/Input';
import { Button } from '../common/Button';
import { ErrorMessage } from '../ErrorMessage';
import { Text } from '../common/Text';
import { Select } from '../common/Select';

const Wrapper = styled.section`
    width: 100%;
    height: auto;
    >form{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: auto;
        margin-bottom: 30px;

        >:nth-child(4){
            margin-top: 15px;
        }
    }
`;

interface Props {
    register: any,
    handleSubmit: any,
    errors: any,
    setValue: any,
    onSubmit: () => void,
    categoryList?: Array<string>
}

export const CategoryForm = ({ register, setValue, handleSubmit, errors, onSubmit, categoryList } : Props) => {
    return(
        <Wrapper>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input type={"text"} register={register("name",{required: true})} width={"100%"} placeholder={"제목"}/>

                <ErrorMessage>
                    {errors.name?.type === "required" && <Text text={"카테고리 이름을 입력해주세요."} fs={"1rem"} fc={"red"}/>}
                </ErrorMessage>

                <Select  width={"100%"} inputName={"parentCategory"} register={register("parentCategory")} setValue={setValue} option={categoryList}/>

                <Button text={"완료"} type={"submit"} width={"100%"} height={"45px"}/>
            </form>
        </Wrapper>
    );
}
import styled from 'styled-components';
import { Input } from '../common/Input';
import { Button } from '../common/Button';
import { ErrorMessage } from '../common/ErrorMessage';
import { Text } from '../common/Text';
import { Close } from '../../assets/svg/Close';

const Wrapper = styled.section`
    width: 100%;
    height: auto;
    >form{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: auto;
        margin-bottom: 30px;
        >:nth-child(1){
            margin-bottom: 20px;
        }
    }
`;

const FlexWrapper = styled.div`
    min-height: 25px;
    display: flex;
    flex-direction: row;
    >:nth-child(n){
        margin-right: 15px;
    }
    >div{
        cursor: pointer;
    }
`;

interface Props {
    register: any,
    handleSubmit: any,
    errors: any,
    onSubmit: () => void,
    onClick: () => void,
    handleMode: () => void,
    check?: boolean,
    selectName: string,
    selectId: number,
}

export const CategoryForm = ({ register, handleSubmit, errors, onSubmit, onClick, handleMode, check, selectName, selectId } : Props) => {
    return(
        <Wrapper>
            <form onSubmit={handleSubmit(onSubmit)}>

                <FlexWrapper>
                    <Text text={`${selectName}`} fs={"2rem"}/>
                    {
                        selectName !== "" && 
                        <div onClick={onClick}>
                            <Close />
                        </div>
                    }
                </FlexWrapper>
                
                <FlexWrapper>
                    <div  onClick={handleMode}>
                        <Text text={`카테고리 추가`} fs={"1.5rem"} fc={check ? "red" : "black"}/>
                    </div>
                    {
                        selectName !== "" && 
                        <div onClick={handleMode}>
                            <Text text={`카테고리 수정`} fs={"1.5rem"} fc={!check ? "red" : "black"}/>
                        </div>
                    }
                </FlexWrapper>

                <FlexWrapper>
                    <Input type={"text"} register={register("name",{required: true})} width={"100%"} height={"45px"} 
                    placeholder={check ? "카테고리 추가하기" : "카테고리 수정하기"}/>
                    <Button text={"완료"} type={"submit"} width={"80px"} height={"45px"}/>
                </FlexWrapper>

                <ErrorMessage>
                    {errors.name?.type === "required" && <Text text={"카테고리 이름을 입력해주세요."} fs={"1rem"} fc={"red"}/>}
                </ErrorMessage>

            </form>
        </Wrapper>
    );
}
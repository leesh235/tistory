import { useSelector } from 'react-redux';
import styled from "styled-components";
import { Text } from "../common/Text";
import { Close } from "../../assets/svg/Close";

const Wrapper = styled.article`

`;

const Category = styled.ul`
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const FlexWrapper = styled.li`
    width: auto;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 10px 0;
    >:nth-child(n+1){
        margin-right: 15px;
    }
`;

const ButtonWrapper = styled.div`
    cursor: pointer;
`;

interface SubCategory{
    id: number,
    name: string
}

interface Category {
    id: number,
    name: string,
    sub?: Array<SubCategory>
}

interface Props {
    handleDeleteCategory: ({name, id}: {name: string, id: number}) => void,
    onClick: ({name, id}: {name: string, id: number}) => void,
    categoryList?: Array<Category>,
}

export const ModifyCategory = ({ handleDeleteCategory, onClick, categoryList }: Props) => {

    const store_select = useSelector((state: any) => state?.select?.select.name);

    return(
        <Wrapper>
            {categoryList?.map((val, idx) => {
                return(
                    <Category key={val.id}>
                        <FlexWrapper>
                            <ButtonWrapper onClick={() => onClick({name: val.name, id: val.id})}>
                                <Text fs={"18px"} text={val.name} key={val.id} fc={store_select === val.name ? "red" : "black"}/>
                            </ButtonWrapper>
                            {val.name !== "전체보기" && 
                                <ButtonWrapper onClick={() => handleDeleteCategory({name: val.name, id: val.id})}>
                                    <Close />
                                </ButtonWrapper>
                            }
                        </FlexWrapper>
                        {val?.sub?.map((subVal) => {
                            return(
                                <FlexWrapper key={subVal.id}>
                                    <ButtonWrapper onClick={() => onClick({name: subVal.name, id: subVal.id})} >
                                        <Text fs={"18px"} text={`-${subVal.name}`} fc={store_select === subVal.name ? "red" : "black"}/>
                                    </ButtonWrapper>
                                    <ButtonWrapper onClick={() => handleDeleteCategory({name: subVal.name, id: subVal.id})}>
                                        <Close />
                                    </ButtonWrapper>
                                </FlexWrapper>
                            );
                        })}
                    </Category>
                );
            })}
        </Wrapper>
    );
}
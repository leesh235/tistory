import { useSelector } from "react-redux";
import styled from 'styled-components';
import { Text } from './Text';

const MWrapper = styled.section`
    position: fixed;
    left: -1px;
    top: 100px;
    border: 0;
    background-color: green;
    border-radius: 0 10px 10px 0;
    height: 150px;
    width: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
`;

const Wrapper = styled.section`
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border: 1px solid gray;
    border-radius: 9px;
`;

const Category = styled.ul`
`;

const ButtonWrapper = styled.li`
    cursor: pointer;
`;

interface SubCategory{
    id: number,
    name: string
}

interface Category{
    id: number,
    name: string,
    sub: Array<SubCategory>
}

interface Props{
    category: Array<Category>,
    handleClickCategory: (id: number) => void
}

export const CategoryList = ({ category, handleClickCategory }: Props) => {

    const store_categoryId = useSelector((state: any) => state.category.categoryId);

    return(
        <Wrapper>
            <Category>
                {category.map((val, idx) => {
                    return(
                        <>
                            <ButtonWrapper onClick={() => handleClickCategory(val.id)}>
                                <Text fs={"18px"} text={val.name} key={val.id} fc={store_categoryId === val.id ? "red" : "black"} margin={"10px 0px 10px 0px"}/>
                            </ButtonWrapper>
                            {val.sub.map((subVal) => {
                                return(
                                    <ButtonWrapper onClick={() => handleClickCategory(subVal.id)}>
                                        <Text fs={"18px"} text={`-${subVal.name}`} key={subVal.id} fc={store_categoryId === subVal.id ? "red" : "black"} margin={"10px 0px 10px 3px"}/>
                                    </ButtonWrapper>
                                );
                            })}
                        </>
                    );
                })}
            </Category>
        </Wrapper>
    );
}
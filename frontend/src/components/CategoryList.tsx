import { useSelector } from "react-redux";
import styled from 'styled-components';
import { Text } from './Text';
import { PC, Tablet, Mobile } from '../utils/responsive';

const Wrapper = styled.section`
    @media screen and (min-width: 64em){
        width: 20%;
        border: 1px solid gray;
        border-radius: 9px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media screen and (max-width: 63.94em) and (min-width: 22.5em){
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
    }

    @media screen and (max-width: 22.44em){
        
    }
`;

const Category = styled.ul`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 30px 0 0 0;
`;

const ButtonWrapper = styled.li`
    cursor: pointer;
    margin: 5px 0;
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
                                <Text fs={"18px"} text={val.name} key={val.id} fc={store_categoryId === val.id ? "red" : "black"}/>
                            </ButtonWrapper>
                            {val.sub.map((subVal) => {
                                return(
                                    <ButtonWrapper onClick={() => handleClickCategory(subVal.id)}>
                                        <Text fs={"18px"} text={`-${subVal.name}`} key={subVal.id} fc={store_categoryId === subVal.id ? "red" : "black"}/>
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
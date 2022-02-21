import { useSelector } from "react-redux";
import styled from 'styled-components';
import { Text } from './Text';
import { PC, Tablet, Mobile } from '../utils/responsive';
import { ListButton } from './ListButton';

const Wrapper = styled.section`
    @media screen and (min-width: 64em){
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        border: 1px solid gray;
        border-radius: 9px;
        padding: 20px 0;
    }

    @media screen and (max-width: 63.94em) and (min-width: 22.5em){
        width: 170px;
        height: auto;
        display: flex;
        justify-content: center;
        border-radius: 0px 0 10px 0px;
        border-left: 0px;
        padding: 20px 0;
        background-color: white;
        box-shadow: 3px 3px 8px gray;
    }

    @media screen and (max-width: 22.44em){
        
    }
`;

const AnimationWrapper = styled.div<StyleProps>`
    @media screen and (max-width: 63.94em) and (min-width: 22.5em){
        display: flex;
        flex-direction: row;
        position: fixed;
        width: 220px;
        height: auto;
        top: ${props => props.top};
        left: ${props => props.left};
        
        @keyframes open {
            from {
                left: -170px;
            }
            to {
                left: 0px;
            }
        }
        @keyframes close {
            from {
                left: 0px;
            }
            to {
                left: -170px;
            }
        }
        animation-name: ${props => props.open ? "open" : "close"};
        animation-timing-function: linear;
        animation-duration: 0.3s;
    }
`;

const Category = styled.ul`
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const ButtonWrapper = styled.li`
    cursor: pointer;
    margin: 5px 0;
`;

interface StyleProps{
    open: boolean,
    top: string,
    left: string,
}

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
    handleClickCategory: (id: number) => void,
    scrollY: number
}

export const CategoryList = ({ category, handleClickCategory, scrollY }: Props) => {

    const store_categoryId = useSelector((state: any) => state.category.categoryId);
    const store_sideMemu = useSelector((state: any) => state.sideMenu.sideBar);

    return(
        <AnimationWrapper left={store_sideMemu ? "0" : "-170px"} top={scrollY !== 0 ? "50px" : "110px"} open={store_sideMemu}>
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
            <Tablet>
                <ListButton />
            </Tablet>
        </AnimationWrapper>
    );
}
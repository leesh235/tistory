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

const Profile = styled.article`
    width: 200px;
    height: 200px;
    border: 1px solid black;
`;

const Category = styled.article`
`;

const Tag = styled.article`
`;

interface Category{
    categoryId: number,
    categoryName: string
}

interface SubCategory{
    subCategoryId: number,
    categoryId: number,
    subCategoryName: string
}

interface Props{
    category: Array<Category>,
    subCategory: Array<SubCategory>
}


export const CategoryList = ({ category, subCategory }: Props) => {

    return(
        <Wrapper>
            {/* <Profile>자기소개</Profile> */}

            <Category>
                {category.map((val, idx) => {
                    return(
                        <>
                            <Text fs={"18px"} text={val.categoryName} key={val.categoryId}  margin={"10px 0px 10px 0px"}/>
                            {subCategory.map((subVal, subIdx) => {
                                if(subVal.categoryId === val.categoryId){
                                    return(
                                        <Text fs={"18px"} text={`-${subVal.subCategoryName}`} key={subVal.subCategoryId} margin={"10px 0px 10px 3px"}/>
                                    );
                                }
                            })}
                        </>
                    );
                })}
            </Category>

            <Tag>태그</Tag>
        </Wrapper>
    );
}
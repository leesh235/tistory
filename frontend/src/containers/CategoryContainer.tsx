import { CategoryList } from '../components/CategoryList';

const category = [
    {
        categoryId: 0,
        categoryName: "react"
    },
    {
        categoryId: 1,
        categoryName: "express"
    },
    {
        categoryId: 2,
        categoryName: "graphql"
    },
    {
        categoryId: 3,
        categoryName: "알고리즘"
    },
    {
        categoryId: 4,
        categoryName: "개발일지"
    }
]

const subCategory = [
    {
        subCategoryId: 0,
        categoryId: 0,
        subCategoryName: "redux-saga"
    },
    {
        subCategoryId: 1,
        categoryId: 3,
        subCategoryName: "c"
    },
    {
        subCategoryId: 2,
        categoryId: 3,
        subCategoryName: "java"
    },
    {
        subCategoryId: 3,
        categoryId: 4,
        subCategoryName: "tistory"
    },
    {
        subCategoryId: 4,
        categoryId: 4,
        subCategoryName: "다이어리"
    },
    {
        subCategoryId: 5,
        categoryId: 4,
        subCategoryName: "css툴"
    },
    {
        subCategoryId: 6,
        categoryId: 4,
        subCategoryName: "포트폴리오"
    },
    {
        subCategoryId: 7,
        categoryId: 4,
        subCategoryName: "소셜미디어"
    },
    {
        subCategoryId: 8,
        categoryId: 4,
        subCategoryName: "쇼핑몰"
    }
]

export const CategoryContainer = () => {

    return(
        <CategoryList category={category} subCategory={subCategory}/>
    );
}
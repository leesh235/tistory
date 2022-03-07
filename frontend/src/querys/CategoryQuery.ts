import { gql } from "@apollo/client";

export const CATEGORYLIST = gql`
    query getCategoryList{
        getCategoryList{
            ... on CategoryListSuccess{
                status
                message
                data{
                    id
                    name
                    sub{
                        id
                        name
                    }
                }
            }
            ... on CategoryListFailure{
                status
                message
            }
        }
    }
`;

export const BAGICCATEGORYLIST = gql`
    query getBagicCategoryList{
        getBagicCategoryList{
            ... on BagicCategoryListSuccess{
                status
                message
                data{
                    id
                    name
                }
            }
            ... on BagicCategoryListFailure{
                status
                message
            }
        }
    }
`;

export const WRITECATEGORY =gql`
    mutation writeCategory($name: String!, $parentCategoryName: String){
        writeCategory(name: $name, parentCategoryName: $parentCategoryName){
            ...on WriteCategorySuccess{
                status
                message
                data{
                    name
                }
            } 
            ...on WriteCategoryFailure{
                status
                message
            }
        }
    }
`;

export const MODIFYCATEGORY =gql`
    mutation modifyCategory($name: String!, $categoryId: Int!){
        modifyCategory(name: $name, categoryId: $categoryId){
            ...on ModifyCategorySuccess{
                status
                message
                data{
                    name
                }
            } 
            ...on ModifyCategoryFailure{
                status
                message
            }
        }
    }
`;

export const DELETECATEGORY =gql`
    mutation deleteCategory($name: String!, $categoryId: Int!){
        deleteCategory(name: $name, categoryId: $categoryId){
            ...on DeleteCategorySuccess{
                status
                message
                data{
                    name
                }
            } 
            ...on DeleteCategoryFailure{
                status
                message
            }
        }
    }
`;
import { gql } from '@apollo/client';

export const WRITECATEGORY =gql`
    mutation writeCategory($name: String!, $parentCategoryName: Int){
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
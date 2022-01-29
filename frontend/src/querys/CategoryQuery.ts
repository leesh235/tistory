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
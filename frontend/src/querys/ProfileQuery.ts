import { gql } from '@apollo/client';

export const PROFILE = gql`
    query {
        getProfile{
            ...on ProfileSuccess{
                status
                message
                data{
                    email
                    nickName
                    createAt
                    role
                    imageUrl
                }
            }
            ...on ProfileFailure{
                status
                message
            }
        }
    }
`;
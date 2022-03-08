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

export const MODIFYPROFILE = gql`
    mutation modifyProfile($nickName: String){
        modifyProfile(nickName: $nickName){
            ...on ModifyProfileSuccess{
                status
                message
                data{
                    nickName
                    modifyAt
                }
            }
            ...on ModifyProfileFailure{
                status
                message
            }
        }
    }
`;
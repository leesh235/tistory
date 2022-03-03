import { gql } from '@apollo/client';

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
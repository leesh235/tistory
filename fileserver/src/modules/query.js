import { gql } from "@apollo/client";

export const MODIFYUSERIMAGE = gql`
    mutation writeUserImage($imageUrl: String){
        writeUserImage(imageUrl: $imageUrl){
            ...on UserImageSuccess{
                status
                message
                data: {
                    id
                    nickName
                    imageUrl
                }
            }
            ...on UserImageFailure{
                status
                message
            }
        }
    }
`;

export const EDITOR = gql`
    mutation writeEditor($postId: Int! $contentsUrl: String){
        writeEditor(postId: $postId contentsUrl: $contentsUrl){
            ...on EditorSuccess{
                status
                message
                data: {
                    id
                    title
                    contentsUrl
                    modifyAt
                }
            }
            ...on EditorFailure{
                status
                message
            }
        }
    }
`;
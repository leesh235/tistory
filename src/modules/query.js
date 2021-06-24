import { gql } from "@apollo/client";

export const MODIFYUERIMG = gql`
    mutation ModifyUserImg($userImg: userImg){
        ModifyUserImg(userImg: $userImg)
    }
`;
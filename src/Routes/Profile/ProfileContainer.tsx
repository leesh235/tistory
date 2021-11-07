import React, {useEffect, useState} from 'react';
import { useQuery } from '@apollo/client';
import { PROFILE } from "./ProfileQuery";
import { ProfilePresenter } from "./ProfilePresenter";
import { Loading } from "../../components/Loading";
import { getProfileImgApi } from "../../api";

export const ProfileContainer = () => {

    const [userImg, setUserImg] = useState<any>("");

    const { loading, data } = useQuery(PROFILE);

    const filesever = async() => {
        const email = data.getProfile.user.email;
        getProfileImgApi(email).then(
            data => {
                console.log(data)
                setUserImg(data.data.profileImg);
            },
            err => {
                console.log(err);
            }
        )
    }

    useEffect(() => {
        if(data?.getProfile?.user?.userImg){
            filesever();
        }
    },[loading])

    if(!loading){
        return (
            <ProfilePresenter 
                userInfo={data?.getProfile?.user} 
                userImg={userImg}
            /> 
        );
    }else{
        return(
            <Loading />
        );
    }

}
import React from 'react';
import { useQuery } from '@apollo/client';
import { PROFILE } from "./ProfileQuery";
import ProfilePresenter from "./ProfilePresenter";

const ProfileContainer = () => {

    const { loading, data } = useQuery(PROFILE);
    // console.log(data);
    const onClick = (e) => {
        e.preventDefault();
        window.location.replace("/modifyProfile");
    }
    return (
        <div>
            {!loading && data.getProfile ? <ProfilePresenter userInfo={data.getProfile} onClick={onClick} /> : "loading..."}
        </div>
    );
}

export default ProfileContainer;
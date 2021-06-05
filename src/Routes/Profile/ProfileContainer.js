import React from 'react';
import { useQuery } from '@apollo/client';
import { PROFILE } from "./ProfileQuery";
import ProfilePresenter from "./ProfilePresenter";

const ProfileContainer = () => {

    const { loading, data } = useQuery(PROFILE);
    // console.log(data);
    return (
        <div>
            {!loading && data.getProfile ? <ProfilePresenter userInfo={data.getProfile} /> : "loading..."}
        </div>
    );
}

export default ProfileContainer;
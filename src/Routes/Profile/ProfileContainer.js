import React, {useEffect, useState} from 'react';
import { useQuery } from '@apollo/client';
import { PROFILE } from "./ProfileQuery";
import ProfilePresenter from "./ProfilePresenter";
import axios from "axios";

const ProfileContainer = () => {

    const [userImg, setUserImg] = useState("");

    const { loading, data } = useQuery(PROFILE);
    // console.log(data);

    const filesever = async() => {
        const jwt = localStorage.getItem("token");
        const userId = data.getProfile.userId;

        if(data.getProfile.userImgId !== null){
            const res = await axios({
                method: "get",
                url: `http://localhost:5000/profileImg/${userId}`,
                headers: {
                    Authorization: jwt,
                    "Content-Type": "multipart/form-data"
                }
            })
            setUserImg(res.data.profileImg);
        }
    }

    useEffect(() => {
        if(!loading){
            filesever();
        }
    },[data])

    return (
        <div>
            {!loading && data.getProfile ? <ProfilePresenter 
                userInfo={data.getProfile} 
                userImg={userImg}
                /> 
            : "loading..."}
        </div>
    );
}

export default ProfileContainer;
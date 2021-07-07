import React, {useEffect, useState} from 'react';
import { useQuery } from '@apollo/client';
import { PROFILE } from "./ProfileQuery";
import ProfilePresenter from "./ProfilePresenter";
import axios from "axios";

const ProfileContainer = () => {

    const [userImg, setUserImg] = useState("");

    const filesever = async() => {
        const res = await axios({
            method: "get",
            url: "http://localhost:5000/profileImg",
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
        console.log(res.data.profileImg);
        setUserImg(res.data.profileImg);
    }

    const { loading, data } = useQuery(PROFILE);
    // console.log(data);
    const onClick = (e) => {
        e.preventDefault();
        window.location.replace("/modifyProfile");
    }

    useEffect(() => {
        filesever();
    },[])

    return (
        <div>
            {!loading && data.getProfile ? <ProfilePresenter 
                userInfo={data.getProfile} 
                userImg={userImg}
                onClick={onClick} 
                /> 
            : "loading..."}
        </div>
    );
}

export default ProfileContainer;
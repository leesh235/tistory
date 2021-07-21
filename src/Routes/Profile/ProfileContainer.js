import React, {useEffect, useState} from 'react';
import { useQuery } from '@apollo/client';
import { PROFILE } from "./ProfileQuery";
import ProfilePresenter from "./ProfilePresenter";
import axios from "axios";
import {  useSelector } from "react-redux";

const ProfileContainer = () => {

    const [userImg, setUserImg] = useState("");

    const { loading, data } = useQuery(PROFILE);
    // console.log(data);

    const filesever = async() => {
        const jwt = localStorage.getItem("token");
        const userId = data.getProfile.userId;

        if(data.getProfile.userImgId !== null){
            console.log("안녕")
            try{
                const res = await axios({
                    method: "get",
                    url: `http://localhost:5000/profileImg/${userId}`,
                    headers: {
                        Authorization: jwt,
                        "Content-Type": "multipart/form-data"
                    }
                })
                console.log("userId: ", userId)
                console.log(res.data.profileImg);
                setUserImg(res.data.profileImg);
            }catch(err){
                console.log(err)
            }
        }
    }

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
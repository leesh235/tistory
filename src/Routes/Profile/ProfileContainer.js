import React, {useEffect, useState} from 'react';
import { useQuery } from '@apollo/client';
import { PROFILE } from "./ProfileQuery";
import ProfilePresenter from "./ProfilePresenter";
import axios from "axios";
import { Loading } from "../../components/Loading";

const ProfileContainer = () => {

    const [userImg, setUserImg] = useState("");

    const { loading, data } = useQuery(PROFILE);
    console.log(data)

    const filesever = async() => {

        if(data.getProfile.userImg !== null){
            const jwt = localStorage.getItem("token");
            const email = data.getProfile.email;
            const res = await axios({
                method: "get",
                url: `http://localhost:5000/profileImg/${email}`,
                headers: {
                    Authorization: jwt,
                    "Content-Type": "multipart/form-data"
                }
            })

            setUserImg(res.data.profileImg);
        }
    }

    useEffect(() => {
        if(!loading && data.getProfile.userImg !== null){
            filesever();
        }
    },[loading])

    if(!loading){
        return (
            <ProfilePresenter 
                userInfo={data.getProfile} 
                userImg={userImg}
            /> 
        );
    }else{
        return(
            <Loading />
        );
    }

}

export default ProfileContainer;
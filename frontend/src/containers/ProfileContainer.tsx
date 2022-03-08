import { UserProfile } from "../components/View/UserProfile";
import { PROFILE } from "../querys/ProfileQuery";
import { useQuery } from "@apollo/client";
import { Error } from "../components/common/Error";
import { Loading } from "../components/common/Loding";

export const ProfileContainer = () => {

    const { loading, data, error } = useQuery(PROFILE);

    const userInfo = data?.getProfile?.data

    if(loading){
        return <Loading />
    }else if(error){
        return <Error />
    }else{
        return (
            <UserProfile {...userInfo}/>
        );
    }
}
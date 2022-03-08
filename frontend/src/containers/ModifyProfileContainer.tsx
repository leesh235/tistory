import { UserForm } from "../components/Form/UserForm";
import { PROFILE } from "../querys/ProfileQuery";
import { MODIFYPROFILE } from "../querys/ProfileQuery";
import { useQuery, useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { Error } from "../components/common/Error";
import { Loading } from "../components/common/Loding";
import { routes } from "../routes";

interface Profile {
    nickName: string,
}

export const ModifyProfileContainer = () => {

    const { register, setValue, handleSubmit, getValues, setError, formState: { errors } } = useForm<Profile>({ mode:"onBlur" });

    const { loading, data, error } = useQuery(PROFILE);
    const [profileMutation] = useMutation(MODIFYPROFILE);

    const onSubmit = async() => {
        try{
            if(window.confirm("정보를 변경하시겠습니까?")){
                const result = await profileMutation({
                    variables: {
                        nickName: getValues("nickName")
                    }
                });
                console.log(result)
                if(result.data?.modifyProfile?.__typename === "ModifyProfileSuccess"){
                    window.location.replace(routes.profile);
                }else{
                    alert(result.data?.modifyProfile.message);
                }
            }
        }catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        if(loading && data?.getProfile?.__typename === "ModifyProfileSuccess"){
            setValue("nickName", data?.getProfile?.data.nickName);
        }
    },[])

    if(loading){
        return <Loading />
    }else if(error){
        return <Error />
    }else{
        return (
            <UserForm userInfo={data?.getProfile?.data} register={register} handleSubmit={handleSubmit} errors={errors} onSubmit={onSubmit}/>
        );
    }
}
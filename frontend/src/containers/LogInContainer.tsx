import { useMutation } from '@apollo/client';
import { LogInForm } from '../components/LogInForm';
import { LOGIN, TOKENLOGIN } from "../querys/LogInQuery";
import { useForm } from 'react-hook-form';

interface LogIn {
    email: string,
    password: string,
}

export const LogInContainer = () => {

    const { register, setValue, handleSubmit, getValues, setError, formState: { errors } } = useForm<LogIn>({ mode:"onBlur" });
 
    const [loginMutation] = useMutation(LOGIN);
    const [tokenMutation] = useMutation(TOKENLOGIN);

    const onSubmit = async() => {
        try{
            const { data } = await loginMutation({
                variables: {
                    email: getValues("email"),
                    password: getValues("password")
                }
            });

            if(data?.login?.__typename === "LogInSuccess"){

                await tokenMutation({
                    variables: {
                        token: data?.login?.data.token
                    }
                });
                setTimeout(() => {
                    window.location.replace("/")
                }, 500);

            }else{
                window.alert("아이디가 없거나 비밀번호가 틀렸습니다.");
            }
        }catch (error) {
            console.log(error);
        }
    }

    return (
        <LogInForm 
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            onSubmit={onSubmit}
        />
    );
}
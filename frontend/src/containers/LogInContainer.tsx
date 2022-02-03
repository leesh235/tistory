import { LogInPresenter } from "../components/LogInPresenter";
import { useMutation } from '@apollo/client';
import { LOGIN, TOKENLOGIN } from "../querys/LogInQuery";

export const LogInContainer = () => {

    const [loginMutation] = useMutation(LOGIN);
    const [tokenMutation] = useMutation(TOKENLOGIN);

    const handleSubmit = async() => {
        const result = await loginMutation({
            variables: {
                email: "", 
                password: ""
            }
        })

        if(result !== "LogInSuccess"){

        }else{
            const { data: {
                status,
                message,
                data,
            }} = result;
            await tokenMutation({
                variables: {
                    token: data.token
                }
            })
        }
    }

    return (
        <LogInPresenter />
    );
}
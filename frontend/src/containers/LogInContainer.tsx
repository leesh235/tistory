import { LogInPresenter } from "../components/LogInPresenter";
import { useMutation } from '@apollo/client';
import { LOGIN, TOKENLOGIN } from "../querys/LogInQuery";

export const LogInContainer = () => {

    const [loginMutation] = useMutation(LOGIN);
    const [tokenMutation] = useMutation(TOKENLOGIN);

    return (
        <LogInPresenter />
    );
}
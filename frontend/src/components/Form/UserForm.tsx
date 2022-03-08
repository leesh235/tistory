import styled from 'styled-components';
import moment from "moment";
import { Text } from '../common/Text';
import { Img } from '../common/Img';
import { Input } from '../common/Input';
import { LinkButton } from "../common/LinkButton";
import { Button } from '../common/Button';
import { routes } from '../../routes';

const Wrapper = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;

    >:nth-child(n + 2){
        margin-top: 30px;
    }
`;

const ContentsWrapper = styled.article`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid gray;
    border-radius: 9px;
    padding: 20px 0;

    @media screen and (min-width: 64em){
        flex-direction: row;
        width: 100%;
        min-height: 500px;
        >:nth-child(n){
            margin: 0 20px;
        }
    }
    @media screen and (max-width: 63.94em){
        flex-direction: column;
        width: 90%;
        >:nth-child(n){
            margin: 20px 0;
        }
    }

`;

const UserWrapper = styled.div`
    display: flex;
    flex-direction: column;
    >:nth-child(n){
        margin: 5px 0;
    }
`;

const ImageWrapper = styled.div`
    width: 150px;
    height: 150px;
    border: 1px solid black;
`;

const ButtonWrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    @media screen and (min-width: 64em){
        width: 100%;
    }
    @media screen and (max-width: 63.94em){
        width: 90%;
        >:nth-child(n){
            margin: 0 5px;
        }
    }

`;

interface User {
    email: string,
    nickName: string,
    createAt: string,
    role: string,
    imageUrl?: string,
}

interface Props {
    register: any,
    handleSubmit: any,
    errors: any,
    onSubmit: () => void,
    userInfo: User
}

export const UserForm = ({ register, handleSubmit, errors, onSubmit, userInfo} : Props) => {
    return(
        <Wrapper onSubmit={handleSubmit(onSubmit)}>
            <ContentsWrapper>
                <ImageWrapper>
                    imageUrl
                </ImageWrapper>
                <UserWrapper>
                    <Text text={`${userInfo.email}`} fs={"1.6rem"} fc={"black"}/>
                    <Input type={"text"} register={register("nickName",{required: true})} width={"100%"} placeholder={userInfo.nickName}/>
                    <Text text={`${moment(userInfo.createAt).format("YYYY-MM-DD")}`} fs={"1.6rem"} fc={"black"}/>
                    <Text text={`${userInfo.role}`} fs={"1.6rem"} fc={"black"}/>
                </UserWrapper>
            </ContentsWrapper>
            <ButtonWrapper>
                <Button text={"완료"} width={"40%"}/>
                <LinkButton text={"취소"} width={"40%"} pathname={routes.profile}/>
            </ButtonWrapper>
        </Wrapper>
    );
}
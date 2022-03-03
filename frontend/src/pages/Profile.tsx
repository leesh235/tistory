import styled from 'styled-components';
import { ProfileContainer } from '../containers/ProfileContainer';
import { Button } from "../components/common/Button";
import { LinkButton } from "../components/common/LinkButton";
import { routes } from '../routes';

const Wrapper = styled.main`
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

const Profile = () => {
    return(
        <Wrapper>
            <ProfileContainer />

            <ButtonWrapper>
                <LinkButton text={"수정"} width={"40%"} pathname={routes.modifyProfile}/>
                <Button text={"회원탈퇴"} width={"40%"} type={"button"}/>
            </ButtonWrapper>
        </Wrapper>
    );
}

export default Profile;
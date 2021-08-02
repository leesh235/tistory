import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    >:nth-child(1){
        margin-bottom: 20px;
    }
`;

const ProfileContainer = styled.div`
    width: 800px;
    min-height: 600px;
    display: flex;
    flex-direction: column;
    padding: 50px;
    border-radius: 15px;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    >:nth-child(n){
        margin-bottom: 20px;
    }
`;

const UserInfo = styled.div`
    
`;

const ImageWrapper = styled.div`

`;

const BtnWrapper = styled.div`
    display: flex;
    flex-direction: row-reverse;
    width: 800px;
    a{
        text-decoration: none;
        color: inherit;
    }
    >:nth-child(n){
        margin-left: 30px;
    }
`;

const ProfileBtn = styled.div`

`;

const ProfilePresenter = ({userImg, userInfo}) => {
    return (
        <Wrapper>
            <ProfileContainer>
                <ImageWrapper>
                    {userImg ? <img src={`http://localhost:5000/${userImg}`} /> : ""}
                </ImageWrapper>
                <UserInfo>{`아이디: ${userInfo.userId}`}</UserInfo>
                <UserInfo>{`email: ${userInfo.email}`}</UserInfo>
            </ProfileContainer>
            
            <BtnWrapper>
            <Link to={{
                    pathname: "/profile/unresister",
                    state: {
                        userInfo: userInfo
                    }
                }}><ProfileBtn>회원탈퇴</ProfileBtn></Link>
            
                <Link to={{
                    pathname: "/modifyProfile",
                    state: {
                        userId: userInfo.userId
                    }
                }}><ProfileBtn>수정</ProfileBtn></Link>
            </BtnWrapper>
        </Wrapper>
    );
}

export default ProfilePresenter;
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ProfileWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
`;

const ProfileContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 70vh;
    width: 70vh;
    border-radius: 15px;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    a{
        text-decoration: none;
        color: inherit;
    }
`;

const UserInfo = styled.div`
    margin-bottom: 15px
`;

const ProfileBtn = styled.button`
    a{
        text-decoration: none;
        color: inherit;
    }
`;

const ProfilePresenter = ({userImg, userInfo}) => {
    return (
        <ProfileWrapper>
            <ProfileContainer>
                {userImg ? <img src={`http://localhost:5000/${userImg}`} /> : ""}
                <UserInfo>{`아이디:           ${userInfo.userId}`}</UserInfo>
                <UserInfo>{`email:            ${userInfo.email}`}</UserInfo>
            </ProfileContainer>

            <ProfileBtn>
                <Link to={{
                    pathname: "/modifyProfile",
                    state: {
                        userId: userInfo.userId
                    }
                }}>수정</Link>
            </ProfileBtn>
        </ProfileWrapper>
    );
}

export default ProfilePresenter;
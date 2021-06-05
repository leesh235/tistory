import React from 'react';
import styled from 'styled-components';

const ProfilePresenter = ({userInfo}) => {
    return (
        <div>
            <div>{userInfo.userId}</div>
            <div>{userInfo.email}</div>
        </div>
    );
}

export default ProfilePresenter;
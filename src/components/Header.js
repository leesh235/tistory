import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { TOKENINFO } from "../apollo/tokenQuery";
import {useQuery} from "@apollo/client";

const HeaderStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid gray;
    a{text-decoration: none;
    color: inherit;}
`;

const LogoStyle = styled.h1`
    margin-left: 30px;
    margin-top: 20px;
    margin-bottom: 30px;
    color: red;
`;

const MenusStyle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const LinkStyle = styled.div`
    margin-right: 50px;
`;

const Header = () => {

    const { data : {
       isLoggedIn
    } } = useQuery(TOKENINFO);

    return (
        <HeaderStyle>
            <LogoStyle>
                <Link to="/">tistory</Link>
            </LogoStyle>
            <MenusStyle>
                <LinkStyle>
                    {isLoggedIn ? <Link to="profile">profile</Link> : <Link to="login">Log in</Link>}
                </LinkStyle>
                <LinkStyle>
                    <Link to="/list">List</Link>
                </LinkStyle>
            </MenusStyle>
        </HeaderStyle>
    );
}

export default Header;
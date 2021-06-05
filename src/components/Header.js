import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { TOKENINFO } from "../apollo/tokenQuery";
import { gql, useMutation, useQuery } from "@apollo/client";
import { useHistory } from "react-router-dom";

const HeaderStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid gray;
    a{
        text-decoration: none;
        color: inherit;
    }
    
`;

const LogoStyle = styled.h1`
    margin-left: 30px;
    margin-top: 20px;
    margin-bottom: 30px;
    color: red;
    cursor:pointer;
`;

const LogOutStyle = styled.div`
    cursor:pointer
`;

const MenusStyle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 50px;
`;

const LinkStyle = styled.div`
    margin-right: 50px;
`;

//log out query
const TOKENLOGOUT = gql`
    mutation userLogOut($token: String!){
        userLogOut(token: $token) @client
    }
`;

const Header = () => {

    const { loading , data : {
       isLoggedIn
    } } = useQuery(TOKENINFO);

    const [tokenMutation] = useMutation(TOKENLOGOUT)

    const handleLogOut = async(e) => {
        e.preventDefault();
        if(window.confirm("really?")){
            await tokenMutation();
        }
    }

    const history = useHistory();
    const onClick = (e) => {
        e.preventDefault();
        setTimeout(() => {
            history.push("/")
        }, 500);
    }

    return (
        <HeaderStyle>
            <LogoStyle onClick={onClick}>tistory</LogoStyle>
            <MenusStyle>
                <LinkStyle>
                    {!loading && isLoggedIn? <Link to="/profile">profile</Link> : ""}
                </LinkStyle>
                <LinkStyle>
                    {!loading && isLoggedIn ? <LogOutStyle onClick={handleLogOut}>Log out</LogOutStyle> : <Link to="/login">Log in</Link>}
                </LinkStyle>
                <LinkStyle>
                    <Link to="/list">List</Link>
                </LinkStyle>
            </MenusStyle>
        </HeaderStyle>
    );
}

export default Header;
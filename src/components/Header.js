import React, { useState } from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { TOKENINFO, TOKENLOGOUT } from "../apollo/tokenQuery";
import { gql, useMutation, useQuery } from "@apollo/client";
import { useHistory } from "react-router-dom";
import ListBar from "./ListBar";

const HeaderStyle = styled.div`
    display: flex;
    flex-direction: row;
    position: fixed;
    top: 0;
    min-width: 100%;
    z-index: 9999999999;
    background-color: white;
    box-shadow: 0 0.5px 3px gray;
    justify-content: space-between;
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

`;

const MenusStyle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 50px;
`;

const LinkStyle = styled.div`
    margin: 0px 50px 0px 50px;
    cursor:pointer;
`;

const ListWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: white;
`;

const LinksStyle = styled.div`
    cursor:pointer;
`;

const Header = () => {

    const { loading , data : {
       isLoggedIn
    } } = useQuery(TOKENINFO);

    const [open, setOpen] = useState(false);
    const [tokenMutation] = useMutation(TOKENLOGOUT);

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

    const onList = () => {
        if(open === true){
            setOpen(false);
        }else{
            setOpen(true);
        }
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
                    <ListWrapper>
                        <LinksStyle onClick={onList}>List</LinksStyle>
                        {open ? <ListBar diplay={"block"} /> : null }
                    </ListWrapper>
                </LinkStyle>
            </MenusStyle>
        </HeaderStyle>
    );
}

export default Header;
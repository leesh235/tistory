import React, { useState } from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { TOKENINFO, TOKENLOGOUT } from "../apollo/tokenQuery";
import { useMutation, useQuery } from "@apollo/client";
import { useHistory } from "react-router-dom";
import { ListBar } from "./ListBar";
import { Loading } from "./Loading";

const Wrapper = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 100px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    background-color: white;
    box-shadow: 0 0.5px 3px gray;
    padding: 0px 50px;
`;

const Logo = styled.h1`
    color: red;
    cursor:pointer;
`;

const LogOutStyle = styled.div`

`;

const Menu = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
`;

const LinkStyle = styled.li`
    display: flex;
    align-items: center;
    width: auto;
    height: 2.5rem;
    margin: 0 2em;
    cursor:pointer;
`;

const ListWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: white;
`;

export const Header = () => {

    const { loading , data: {
        isLoggedIn
    }} = useQuery(TOKENINFO);

    const [open, setOpen] = useState(false);
    const [tokenMutation] = useMutation(TOKENLOGOUT);

    const handleLogOut = async(e: React.MouseEvent) => {
        e.preventDefault();
        if(window.confirm("really?")){
            await tokenMutation();
        }
    }

    const history = useHistory();
    const onClick = (e: React.MouseEvent) => {
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

    if(!loading){
        return (
            <Wrapper>
                <Logo onClick={onClick}>tistory</Logo>
                <Menu>
                    <LinkStyle>
                        {isLoggedIn && <Link to="/profile">profile</Link>}
                    </LinkStyle>
                    <LinkStyle>
                        {isLoggedIn ? <LogOutStyle onClick={handleLogOut}>Log out</LogOutStyle> : <Link to="/login">Log in</Link>}
                    </LinkStyle>
    
                    <LinkStyle onClick={onList}>
                        <ListWrapper>
                            <>List</>
                            {open ? <ListBar display={"block"} /> : null }
                        </ListWrapper>
                    </LinkStyle>
                </Menu>
            </Wrapper>
        );
    }else{
        return <Loading />
    }
}
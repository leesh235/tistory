import React, { useState } from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { TOKENINFO, TOKENLOGOUT } from "../../apollo/tokenQuery";
import { useMutation, useQuery } from "@apollo/client";
import { useHistory } from "react-router-dom";
import { Text } from "../Text";
import { PC, Tablet, Mobile } from "../../utils/responsive";

const Wrapper = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 80px;
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

const Menu = styled.ul`
    display: flex;
    flex-direction: row;
    >:nth-child(1){
        margin-right: 20px;
    }
    >:nth-child(2){
        margin-left: 20px;
    }
`;

export const Header = () => {

    const { loading , data: {
        isLoggedIn
    }} = useQuery(TOKENINFO);

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

    return (
        <Wrapper>
            <PC>
                <Logo onClick={onClick}>tistory</Logo>
                <Menu>
                    <li>
                        <Text text={"검색"}/>
                    </li>
                    <li>
                        {isLoggedIn ? 
                                <div onClick={handleLogOut}>
                                    <Text text={"로그아웃"}/>
                                </div> 
                            : 
                                <Link to="/login">
                                    <Text text={"로그인"}/>
                                </Link>}
                    </li>
                </Menu>
            </PC>

            <Tablet>
                <Logo onClick={onClick}>tistory</Logo>
                <Menu>
                    <li>
                        {isLoggedIn ? 
                                <div onClick={handleLogOut}>
                                    <Text text={"로그아웃"}/>
                                </div> 
                            : 
                                <Link to="/login">
                                    <Text text={"로그인"}/>
                                </Link>}
                    </li>
                </Menu>
            </Tablet>

            <Mobile>
                <Text text={"메뉴"}/>
                <Logo onClick={onClick}>tistory</Logo>
                <Text text={"검색"}/>
            </Mobile>
        </Wrapper>
    );
}
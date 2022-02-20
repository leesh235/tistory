import React, { useState } from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { TOKENINFO, TOKENLOGOUT } from "../../apollo/tokenQuery";
import { useMutation, useQuery } from "@apollo/client";
import { useHistory } from "react-router-dom";
import { Text } from "../Text";
import { PC, Tablet, Mobile } from "../../utils/responsive";
import { ListButton } from "../ListButton";
import { SearchInput } from "../SearchInput";

const Wrapper = styled.header`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    box-shadow: 0 0.5px 3px gray;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 80px;

    @media screen and (min-width: 64em){
        >:nth-child(1){
            margin: 0 0 0 50px;
        }

        >:nth-child(2){
            margin: 0 50px 0 0;
        }
    }

    @media screen and (max-width: 63.94em) and (min-width: 22.5em){
        >:nth-child(1){
            margin: 0 0 0 20px;
        }

        >:nth-child(2){
            margin: 0 20px 0 0;
        }
    }

    @media screen and (max-width: 22.44em){
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1;
        height: 65px;

        >:nth-child(1){
            margin: 0 0 0 20px;
        }

        >:nth-child(3){
            margin: 0 20px 0 0;
        }
    }

`;

const Logo = styled.h1`
    color: red;
    cursor:pointer;
    margin-bottom: 8px;

    @media screen and (max-width: 22.44em){
        font-size: 24px;
    }
`;

const Menu = styled.ul`
    display: flex;
    flex-direction: row;
    >:nth-child(1){
        margin-right: 20px;
    }
    >:nth-child(2){
        margin-top: 3px;
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
                <Logo onClick={onClick}>Leesh</Logo>
                <Menu>
                    <li>
                        <SearchInput />
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
                <Logo onClick={onClick}>Leesh</Logo>
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
                <SearchInput />
            </Tablet>

            <Mobile>
                <ListButton />
                <Logo onClick={onClick}>Leesh</Logo>
                <SearchInput />
            </Mobile>
        </Wrapper>
    );
}
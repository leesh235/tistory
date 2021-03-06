import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { TOKENINFO, TOKENLOGOUT } from "../apollo/tokenQuery";
import { useMutation, useQuery } from "@apollo/client";
import { Text } from "./common/Text";
import { PC, Tablet, Mobile, PCTablet } from "../utils/responsive";
import { ListButton } from "./common/ListButton";
import { SearchInput } from "./SearchInput";
import { routes } from "../routes";
import { ListBar } from "./ListBar";
import { useHistory, useLocation } from 'react-router-dom';

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

const FlexWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    width: auto;
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
    height: 30px;
    display: flex;
    flex-direction: row;
    >li{
        cursor: pointer;
        margin: 0 15px;
    }
    @media screen and (min-width: 64em){
        >:nth-child(n+2){
            margin-top: 3px;
        }
    }
`;

export const Header = () => {

    const { data: { isLoggedIn, role } } = useQuery(TOKENINFO);

    const history = useHistory();
    const location = useLocation();
    
    const [tokenMutation] = useMutation(TOKENLOGOUT);
    const [open, setOpen] = useState<boolean>(false);

    const handleLogOut = async(e: React.MouseEvent) => {
        e.preventDefault();
        if(window.confirm("really?")){
            await tokenMutation();
            window.location.reload();
        }
    }

    const handleLogo = (e: React.MouseEvent) => {
        e.preventDefault();
        setTimeout(() => {
            window.location.replace(`${routes.home}`);
        }, 500);
    }

    const handleOnClick = () => {
        setOpen(!open);
    }

    useEffect(() => {
        // if(
        //     history.location.pathname === routes.writeCategory ||
        //     history.location.pathname === routes.writeNotice ||
        //     history.location.pathname === routes.writePost
        // ){
            setOpen(false);
        // }
    },[location])

    return (
        <Wrapper>
            <PCTablet>
                <Logo onClick={handleLogo}>Leesh</Logo>
                <Menu>
                    <PC>
                        <li>
                            <SearchInput />
                        </li>
                    </PC>
                    <li>
                        {isLoggedIn ? 
                            <>
                                <FlexWrapper onClick={handleOnClick}>
                                    <Text text={"?????????"}/> 
                                </FlexWrapper>
                                {open ? <ListBar /> : ""}               
                            </>
                        : ""}
                    </li>
                    <li onClick={isLoggedIn && handleLogOut}>
                        {isLoggedIn ? 
                                <Text text={"????????????"}/>
                            : 
                                <Link to="/login">
                                    <Text text={"?????????"}/>
                                </Link>}
                    </li>
                </Menu>
                <Tablet>
                    <SearchInput />
                </Tablet>
            </PCTablet>

            <Mobile>
                <ListButton />
                <Logo onClick={handleLogo}>Leesh</Logo>
                <SearchInput />
            </Mobile>
        </Wrapper>
    );
}
import React, { useState } from "react";
import styled, { keyframes } from 'styled-components';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

//animation 주기
const AaniFucntuin = styled.div`
    .block{
        animation-duration: 0.5s;
        animation-name: ${p=>p.showMenu}, ${p=>p.menuOn};
        top:57px;
    }
    .none{
        animation-duration: 0.5s;
        animation-name: ${p=>p.hideMenu}, ${p=>p.menuOff};
        top: -0px;
    }
    z-index: -1;
`;

//list bar style
const Wrapper = styled.div`
    position: absolute;
    background-color: white;
    width: 100px;
    height: auto;
    transform: translate(-40%, 0);
    box-shadow: 1px 1.7px 2px 0 rgba(0, 0, 0, 0.35);
`;

//on/off시 위치
const showMenu = keyframes`
    0%{
      top : 0px;
    }
    100% {
      top : 57px;
    }
`
const hideMenu = keyframes`
    0% {
      top : 57px;
    }
    100% {
      top : 0px;
    }
`

//on/off 시 시간
const menuOn = keyframes`
    0% { 
        opacity: 0; 
    }
    100% { 
        opacity: 1;
    }
`
const menuOff = keyframes`
    0% { 
        opacity: 1; 
    }
    100% { 
        opacity: 0; 
    }
`
const ListWrapper = styled.div`
    margin: 30px 20px;
`;
const ListMenu = styled.div`

`;

const ListBar = ({diplay}) => {

    return (
        <AaniFucntuin showMenu={showMenu} hideMenu={hideMenu} menuOn={menuOn} menuOff={menuOff}>
            <Wrapper showMenu={showMenu} hideMenu={hideMenu} className={diplay}>

                <ListWrapper>
                    <ListMenu>
                        <Link to="/" >Home</Link>
                    </ListMenu>
                </ListWrapper>

                <ListWrapper>
                    <ListMenu>
                        <Link to="/mypost" >myPOST</Link>
                    </ListMenu>
                </ListWrapper>

                <ListWrapper>
                    <ListMenu>
                        <div onClick={() => {
                            window.location.replace(`search`)
                        }}>Search</div>
                    </ListMenu>
                </ListWrapper>

                <ListWrapper>
                    <ListMenu>
                        <Link to="/add" >Add</Link>
                    </ListMenu>
                </ListWrapper>

            </Wrapper>
        </AaniFucntuin>
    );
}

export default ListBar;
import { ReactChildren, ReactChild } from 'react';
import styled, { keyframes } from 'styled-components';

//animation 주기
const AaniFucntuin = styled.div<KeyframesProps>`
    .block{
        animation-duration: 0.5s;
        animation-name: ${p=>p.showMenu}, ${p=>p.menuOn};
        top:57px;
    }
    .none{
        animation-duration: 0.5s;
        animation-name: ${p=>p.hideMenu}, ${p=>p.menuOff};
        top: 0px;
    }
    z-index: -1;
`;

//on/off시 위치
const showMenu = keyframes`
    from{
      top : 0px;
    }
    to {
      top : 57px;
    }
`
const hideMenu = keyframes`
    from {
      top : 57px;
    }
    to {
      top : 0px;
    }
`

//on/off 시 시간
const menuOn = keyframes`
    from { 
        opacity: 0; 
    }
    to { 
        opacity: 1;
    }
`
const menuOff = keyframes`
    from { 
        opacity: 1; 
    }
    to { 
        opacity: 0; 
    }
`

interface Props{
    display: string,
    children?: ReactChildren | ReactChild | React.ReactNode
}

interface KeyframesProps{
    showMenu: any,
    hideMenu: any,
    menuOn: any,
    menuOff: any,
}

/*
    children component에 transform: translate(-40%, 0); 옵션으로 위치 조정
*/
export const Animation = ({ display, children }: Props) => {
    return(
        <AaniFucntuin className={display} showMenu={showMenu} hideMenu={hideMenu} menuOn={menuOn} menuOff={menuOff}>
            {children}
        </AaniFucntuin>
    );
}
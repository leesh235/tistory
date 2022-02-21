import styled from 'styled-components';
import { MenuLine } from '../assets/svg/MenuLine';
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setSideBar } from "../redux/actions/sideMenu";
import { useScroll } from '../hooks/useScroll';

const Wrapper = styled.div<StyleProps>`
    @media screen and (max-width: 63.94em) and (min-width: 22.5em){
        border-radius: 0px 10px 10px 0px;
        border-left: 0px;
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        box-shadow: 3px 1px 3px gray;

        position: fixed;
        top: ${props => props.top};
        left: ${props => props.left};
    }

    @media screen and (max-width: 22.44em){
        width: auto;
        height: auto;
    }

    cursor: pointer;
`;

interface StyleProps{
    top: string,
    left: string,
}

export const ListButton = () => {

    const dispatch = useDispatch();
    const y = useScroll();

    const store_sideMemu = useSelector((state: any) => state.sideMenu.sideBar);

    const handleOnclick = () => {
        dispatch(setSideBar(!store_sideMemu));
    }

    useEffect(() => {
        
    },[y.scrollY])

    return(
        <Wrapper onClick={handleOnclick} left={store_sideMemu ? "170px" : "0px"} top={y.scrollY !== 0 ? "50px" : "110px"}>
            <MenuLine />
        </Wrapper>
    );
}
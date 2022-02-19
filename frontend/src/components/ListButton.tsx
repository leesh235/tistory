import styled from 'styled-components';
import { MenuLine } from '../assets/svg/MenuLine';

const Wrapper = styled.div`
    @media screen and (max-width: 63.94em) and (min-width: 22.5em){
        border-radius: 0px 10px 10px 0px;
        border: 1px solid;
        border-left: 0px;
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media screen and (max-width: 22.44em){
        width: auto;
        height: auto;
    }

    cursor: pointer;
`;

export const ListButton = () => {
    return(
        <Wrapper>
            <MenuLine />
        </Wrapper>
    );
}
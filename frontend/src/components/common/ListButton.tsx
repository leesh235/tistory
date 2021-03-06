import styled from 'styled-components';
import { MenuLine } from '../../assets/svg/MenuLine';
import { useSelector, useDispatch } from "react-redux";
import { setSideBar } from "../../redux/actions/sideMenu";

const Wrapper = styled.div`
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
    }

    @media screen and (max-width: 22.44em){
        width: auto;
        height: auto;
    }

    cursor: pointer;
`;

export const ListButton = () => {

    const dispatch = useDispatch();

    const store_sideMemu = useSelector((state: any) => state.sideMenu.sideBar);

    const handleOnclick = () => {
        dispatch(setSideBar(!store_sideMemu));
    }

    return(
        <Wrapper onClick={handleOnclick}>
            <MenuLine />
        </Wrapper>
    );
}
import styled from 'styled-components';
import { Search, WhiteSearch } from '../assets/svg/Search';
import { useEffect, useState } from 'react';
import { PC, Tablet, Mobile } from '../utils/responsive';
import { useScroll } from '../hooks/useScroll';

const Wrapper = styled.div<StyleProps>`
    @media screen and (min-width: 64em){
        width: auto;
        height: auto;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    @media screen and (max-width: 63.94em) and (min-width: 22.5em){
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border-radius: 20px;
        background-color: orangered;
        position: fixed;
        top: ${props => props.top};
        right: 20px;
    }
`;

const EventWarpper = styled.div`
    cursor: pointer;
`;

const InputWarpper = styled.div<StyleProps>`
    width: 200px;
    height: 24px;
    margin-right: 5px;
    border: solid 1px gray;
    border-radius: 6px;
    display: flex;
    flex-direction: row;
    align-items: center;

    >input{
        border: 0px;
        padding: 0px 0px 0px 5px;
        margin: 0px;
        width: 90%;
        height: 100%;
        border-radius: 6px;
        ::placeholder{
            color: lightgray;
            font-size: 12px;
        }
    }

    >div{
        width: 9%;
        height: auto;
        margin-bottom: 5px;
    }

    @media screen and (max-width: 63.94em) and (min-width: 22.5em){
        position: fixed;
        top: ${props => props.top};
        right: 60px;
    }
`;

interface StyleProps {
    top: string,
}

export const SearchInput = () => {

    const [open, setOpen] = useState<Boolean>(false);
    const y = useScroll();

    const handleOnClick = () => {
        setOpen(!open);
    }

    const handleOnSubmit = () => {
        if(open){
            console.log("onSubmit");
        }else{
            setOpen(!open);
        }
    }

    useEffect(() => {
        
    },[y.scrollY])

    return(
        <Wrapper top={y.scrollY !== 0 ? "50px" : "110px"}>
            {open && 
                <InputWarpper top={y.scrollY !== 0 ? "50px" : "115px"}>
                    <input type="text" placeholder='검색어를 입력해주세요.'/>
                    <EventWarpper onClick={handleOnClick}>
                        x
                    </EventWarpper>
                </InputWarpper>
            }
            <EventWarpper onClick={handleOnSubmit}>
                <PC>
                    <Search />
                </PC>
                <Tablet>
                    <WhiteSearch />
                </Tablet>
                <Mobile>
                    <Search />
                </Mobile>
            </EventWarpper>
        </Wrapper>
    );
}
import styled from 'styled-components';
import { Search, WhiteSearch } from '../assets/svg/Search';
import { useState } from 'react';
import { PC, Tablet, Mobile } from '../utils/responsive';

const Wrapper = styled.div`
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
        top: 110px;
        right: 20px;
    }
`;

const EventWarpper = styled.div`
    cursor: pointer;
`;

const InputWarpper = styled.div`
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
        top: 115px;
        right: 60px;
    }
`;

export const SearchInput = () => {

    const [open, setOpen] = useState<Boolean>(false);

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

    return(
        <Wrapper>
            {open && 
                <InputWarpper>
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
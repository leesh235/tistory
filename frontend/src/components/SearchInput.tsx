import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { is_tablet } from '../utils/responsive';
import { useDispatch } from 'react-redux';
import { setSearch } from '../redux/actions/search';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { Search } from '../assets/svg/Search';
import { useScroll } from '../hooks/useScroll';
import { Close } from '../assets/svg/Close';
import { routes } from '../routes';

const Wrapper = styled.form<StyleProps>`
    @media screen and (min-width: 64em){
        width: auto;
        height: 30px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
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

const EventWarpper = styled.button`
    width: auto;
    height: auto;
    border: 0px;
    margin: 0px;
    padding: 0px;
    background-color: transparent;
    cursor: pointer;
`;

const InputWarpper = styled.div<StyleProps>`
    width: 200px;
    height: 30px;
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
        width: 85%;
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
    top?: string,
}

interface SearchWored {
    word: string,
}

export const SearchInput = () => {

    const { register, handleSubmit, getValues } = useForm<SearchWored>();

    const [open, setOpen] = useState<Boolean>(false);
    const y = useScroll();
    const dispatch = useDispatch();
    const isTablet = useMediaQuery({query: is_tablet});
    
    const handleOnClick = () => {
        setOpen(!open);
    }

    const handleOnSubmit = () => {
        if(open){
            dispatch(setSearch(getValues("word")));
        }else{
            console.log("button");
            setOpen(!open);
        }
    }

    useEffect(() => {
        if(window.location.pathname.split("=")[0] !== routes.search){
            dispatch(setSearch(""))
        }
    },[y.scrollY])

    return(
        <Wrapper top={y.scrollY !== 0 ? "50px" : "110px"} onSubmit={handleSubmit(handleOnSubmit)}>
            {open && 
                <InputWarpper top={y.scrollY !== 0 ? "50px" : "115px"}>
                    <input type="text" {...register("word",{ required: true })} placeholder='검색어를 입력해주세요.'/>
                    <EventWarpper type="button" onClick={handleOnClick}>
                        <Close />
                    </EventWarpper>
                </InputWarpper>
            }
            <EventWarpper type={open ? "submit" : "button"} onClick={handleSubmit(handleOnSubmit)}>
                <Search color={isTablet ? "white" : "black"}/>
            </EventWarpper>
        </Wrapper>
    );
}
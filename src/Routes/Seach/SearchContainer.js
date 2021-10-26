import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { SEARCH } from "./SearchQuery";
import SearchPresenter from './SearchPresenter';
import HomePresenter from "../Home/HomePresenter";
import { Loading } from "../../components/Loading";

const SearchContainer = () => {
    
    const [text, setText] = useState("");
    const {loading, data} = useQuery(SEARCH, {variables: {text:text}});

    if(!loading){
        if(text === ""){
            return (
                <SearchPresenter setText={text => setText(text)} />
            );
        }else{
            return (
                <HomePresenter postList={data?.getSearch?.search} />
            )
        }
    }else{
        return(
            <Loading />
        );
    }
}

export default SearchContainer;
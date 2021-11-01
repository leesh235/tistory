import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { SEARCH } from "./SearchQuery";
import SearchPresenter from './SearchPresenter';
import HomePresenter from "../Home/HomePresenter";
import { Loading } from "../../components/Loading";
import { Pages } from "../../components/Pages";

const SearchContainer = () => {
    
    const [text, setText] = useState("");
    const [count, setCount] = useState(3);
    const [page, setPage] = useState(1);

    const {loading, data} = useQuery(SEARCH, {
        variables: {
            text:text,
            count: count,
            page: page
        }
    });
    console.log(data)

    useEffect(() => {},[loading])

    if(!loading){
        if(text === ""){
            return (
                <SearchPresenter setText={text => setText(text)} />
            );
        }else{
            return (
                <>
                    <HomePresenter postList={data?.getSearch?.search} />
                    <Pages total={data?.getSearch?.postCnt} each={count} page={page} setPage={setPage} margin={"0 0 80px 0"}/>
                </>
            )
        }
    }else{
        return(
            <Loading />
        );
    }
}

export default SearchContainer;
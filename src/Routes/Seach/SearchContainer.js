import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { SEARCH } from "./SearchQuery";
import SearchPresenter from './SearchPresenter';
import SearchList from './SearchList';

const SearchContainer = () => {
    const [text, setText] = useState("");
    const {loading, data} = useQuery(SEARCH, {variables: {text:text}});
    // console.log(data)

    if(text === ""){
        return (
            <div>
                <SearchPresenter setText={text => setText(text)} />
            </div>
        );
    }else{
        return (
            <div>
                {!loading && data.getSearch ? <SearchList result={data.getSearch} /> : "loading..."}
            </div>
        )
    }
}

export default SearchContainer;
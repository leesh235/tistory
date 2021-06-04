import React, { useState } from 'react';
import { gql,useQuery } from '@apollo/client';
import SearchPresenter from './SearchPresenter';
import SearchList from './SearchList';

const GET_MOVIES = gql`
{
    movies {
        id
        title
        rating
        summary
        medium_cover_image
        genres
    }
}
`;

const SearchContainer = ({initName}) => {
    const {loading, data} = useQuery(GET_MOVIES);
    const [name, searchName] = useState("");

    if(name === ""){
        return (
            <div>
                {!loading && data.movies ? <SearchPresenter searchName={name => searchName(name)} /> : "loading..."}
            </div>
        );
    }else{
        const result = data?.movies?.filter(movie => {
            return movie.title.includes(name)
        })
        return (
            <div>
                {result.length !== 0 ? <SearchList movies={result} searchName={searchName}/> : searchName("")}
            </div>
        );
    }
}

export default SearchContainer;
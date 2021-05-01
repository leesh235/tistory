import React from 'react';
import { gql,useQuery } from '@apollo/client';
import SearchPresenter from './SearchPresenter';

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

const SearchContainer = () => {
    return(
        <SearchPresenter  />
    );
}

export default SearchContainer;
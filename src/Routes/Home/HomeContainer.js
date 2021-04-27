import React from 'react';
import { gql,useQuery } from '@apollo/client';
import HomePresenter from './HomePresenter';

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

export default () => {
    const {loading, data} = useQuery(GET_MOVIES);
    return (
        <div>
            {data && data.movies ? <HomePresenter loading={loading} movies={data.movies} /> : null}
        </div>
    );
};
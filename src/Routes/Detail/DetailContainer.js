import React from 'react';
import { gql,useQuery } from '@apollo/client';
import { useParams } from "react-router-dom";
import DetailPresenter from './DetailPresenter';

const GET_MOVIES = gql`
query getMovie($id: Int!) {
    movie(id: $id) {
      id
      rating
      title
      language
      medium_cover_image
      summary
    }
  }
`;

export default () => {
    const { id } = useParams();
    const {loading, data} = useQuery(GET_MOVIES,{variables: { id: +id }});
    return (
        <div>
            {data && data.movies ? <DetailPresenter loading={loading} movies={data.movie} /> : null}
        </div>
    );
};
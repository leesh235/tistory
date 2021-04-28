import React from 'react';
import { gql,useQuery } from '@apollo/client';
import { useParams } from "react-router-dom";
import DetailPresenter from './DetailPresenter';

const GET_MOVIES = gql`
query getMovie($id: Int!) {
    movie(id: $id) {
      id
      title
      rating
      description_intro
      language
      medium_cover_image
      genres
    }
  }
`;

export default () => {
    const { id } = useParams();
    const {loading, data} = useQuery(GET_MOVIES,{variables: { id: +id }});
    return (
        <div>
            {!loading && data.movie ? <DetailPresenter movie={data.movie} /> : "loading..."}
        </div>
    );
};
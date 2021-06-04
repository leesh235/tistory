import React from 'react';
import { useQuery } from '@apollo/client';
import { DETAIL } from "./DetailQuery";
import { useParams } from "react-router-dom";
import DetailPresenter from './DetailPresenter';

export default () => {

    const {postId} = useParams();
    // console.log(postId);
    const {loading, data} = useQuery(DETAIL,{variables: {postId: postId} });
    return (
        <div>
            {!loading && data.getPost ? <DetailPresenter post={data.getPost} /> : "loading..."}
        </div>
    );
};
import React from 'react';
import { useQuery } from '@apollo/client';
import { DETAIL } from "./DetailQuery";
import { useParams } from "react-router-dom";
import DetailPresenter from './DetailPresenter';

export default () => {

    const {postId} = useParams();
    // console.log(postId);
    const {loading, data} = useQuery(DETAIL,{variables: {postId: postId} });
    const onClick = (e) => {
        e.preventDefault();
        window.location.replace("/modifyPost");
    }
    return (
        <div>
            {postId && !loading && data.getPost ? <DetailPresenter post={data.getPost} postId={postId} onClick={onClick} /> : "loading..."}
        </div>
    );
};
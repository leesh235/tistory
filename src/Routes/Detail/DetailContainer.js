import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { DETAIL } from "./DetailQuery";
import { useParams } from "react-router-dom";
import DetailPresenter from './DetailPresenter';

export default ({history, location}) => {

    const { postId } = useParams();

    // console.log(postId);

    const {loading, data} = useQuery(DETAIL,{
        variables: {
            postId: postId,
            id: location.state.id
        } 
    });

    useEffect(() => {
        if(location.state.id === undefined){
            history.push(`/`);
        }
    })

    return (
        <div>
            {postId && !loading && data.getPost ? 
                <DetailPresenter 
                    post={data.getPost.Post}
                    equal={data.getPost.equal}
                    postId={postId}
                /> : 
            "loading..."}
            
        </div>
    );
};
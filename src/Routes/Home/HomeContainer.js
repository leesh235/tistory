import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { POST } from "./HomeQuery";
import HomePresenter from './HomePresenter';

export default () => {

    const {loading, data} = useQuery(POST);

    useEffect(() => {
        if(!loading){
            // console.log("data: ",data.getAllPosts.posts[0].postId);
        }
    },[])

    return (
        <div>
            {!loading && data ? <HomePresenter postList={data.getAllPosts.posts} /> : "loading..."}
        </div>
    );
};
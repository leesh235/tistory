import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { POST } from "./HomeQuery";
import HomePresenter from './HomePresenter';

export default () => {

    const {loading, data} = useQuery(POST);
    if(!loading){
        console.log(data);
    }
    useEffect(() => {
        if(!loading){
            // console.log(data);
        }
    },[])

    return (
        <div>
            {!loading && data ? <HomePresenter postList={data.getAllPosts} /> : "loading..."}
        </div>
    );
};
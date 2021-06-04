import React from 'react';
import { useQuery } from '@apollo/client';
import { POST } from "./HomeQuery";
import HomePresenter from './HomePresenter';

export default () => {
    const {loading, data} = useQuery(POST);
    return (
        <div>
            {!loading && data ? <HomePresenter allPosts={data.getAllPosts} /> : "loading..."}
        </div>
    );
};
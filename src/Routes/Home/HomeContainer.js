import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { POST } from "./HomeQuery";
import HomePresenter from './HomePresenter';

export default () => {

    const getPostList = useQuery(POST);

    const [posts, setPosts] = useState([])

    const init = async() => {
        const {data} = await getPostList;
        setPosts(data.getAllPosts)
        // console.log(data.getAllPosts)
    }

    useEffect(() => {
        init();
    },[])

    return (
        <HomePresenter postList={posts} />
    );
};
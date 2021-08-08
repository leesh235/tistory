import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { POST } from "./HomeQuery";
import HomePresenter from './HomePresenter';

export default () => {

    const { loading, data  } = useQuery(POST);

    const [posts, setPosts] = useState([])

    useEffect(() => {

    },[loading])

    return (
        <div>
            {!loading && <HomePresenter postList={data.getAllPosts} />}
        </div>
    );
};
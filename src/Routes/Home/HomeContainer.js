import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { POST } from "./HomeQuery";
import HomePresenter from './HomePresenter';
import { Loading } from "../../components/Loading";
import { Pages } from "../../components/Pages"

export default () => {

    const [count, setCount] = useState(1);
    const [page, setPage] = useState(1);

    const { loading, data } = useQuery(POST, { 
        variables: { 
            count: count,
            page: page
        } 
    });
    
    console.log(data)

    useEffect(() => {},[loading])

    if(!loading){
        return (
            <>
                <HomePresenter postList={data?.getAllPosts?.posts} />
                <Pages page={page} setPage={setPage}/>
            </>
        );
    }else{
        return (
            <Loading />
        );
    }
};
import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { POST } from "./HomeQuery";
import HomePresenter from './HomePresenter';
import { Loading } from "../../components/Loading";
import { Pages } from "../../components/Pages"

export const HomeContainer = () => {

    const [count, setCount] = useState<number>(3);
    const [page, setPage] = useState<number>(1);

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
                <Pages total={data?.getAllPosts?.postCnt} each={count} page={page} setPage={setPage} margin={"0 0 80px 0"}/>
            </>
        );
    }else{
        return (
            <Loading />
        );
    }
};
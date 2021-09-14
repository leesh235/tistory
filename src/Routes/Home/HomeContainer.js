import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { POST } from "./HomeQuery";
import HomePresenter from './HomePresenter';
import { Loading } from "../../components/Loading";

export default () => {

    const { loading, data } = useQuery(POST);
    
    console.log(data)

    if(!loading){
        return (
            <HomePresenter postList={data.getAllPosts.posts} />
        );
    }else{
        return (
            <Loading />
        );
    }
};
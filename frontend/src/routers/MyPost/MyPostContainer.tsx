import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { MYPOST } from "./MyPostQuery";
import { MyPostPresenter } from "./MyPostPresenter";
import { Loading } from "../../components/Loading";
import { Pages } from "../../components/Pages";

export const MyPostContainer = () => {

    const [count, setCount] = useState(3);
    const [page, setPage] = useState(1);


    const { loading, data } = useQuery(MYPOST, {
        variables: { 
            count: count,
            page: page
        }
    });

    useEffect(() => {

    },[loading])

    if(!loading){
        return (
            <Pages total={data?.getMyPosts?.postCnt} each={count} page={page} setPage={setPage}>
                <MyPostPresenter myposts={data.getMyPosts.allMyPosts} />
            </Pages>
        );
    }else{
        return (
            <Loading />
        );
    }
}
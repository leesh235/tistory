import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { MYPOST } from "./MyPostQuery";
import MyPostPresenter from "./MyPostPresenter";

const MyPostContainer = () => {

    const { loading, data } = useQuery(MYPOST);

    useEffect(() => {

    },[loading])

    return (
        <div>
            {!loading && data.getMyPosts ? <MyPostPresenter myposts={data.getMyPosts.allMyPosts} /> : "loading..."}
        </div>
    );
}

export default MyPostContainer;
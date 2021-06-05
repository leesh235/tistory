import React from "react";
import { useQuery } from "@apollo/client";
import { MYPOST } from "./MyPostQuery";
import MyPostPresenter from "./MyPostPresenter";

const MyPostContainer = () => {

    const { loading, data } = useQuery(MYPOST);

    return (
        <div>
            {!loading && data.getMyPosts ? <MyPostPresenter myposts={data.getMyPosts} /> : "loading..."}
        </div>
    );
}

export default MyPostContainer;
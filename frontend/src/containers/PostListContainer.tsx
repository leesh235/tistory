import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { POSTLIST } from '../querys/PostListQuery';
import { PostList } from '../components/Home/PostList';
import { Pages } from "../components/Pages";

export const PostListContainer = () => {

    const [count, setCount] = useState<number>(3);
    const [page, setPage] = useState<number>(1);

    const { loading, data } = useQuery(POSTLIST, { 
        variables: { 
            count: 3,
            page: page
        } 
    });

    return(
        <Pages total={data?.getAllPosts?.postCnt} each={count} page={page} setPage={setPage}>
            <PostList postList={data?.getAllPosts?.posts} />
        </Pages>
    );
}
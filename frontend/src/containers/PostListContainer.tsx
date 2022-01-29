import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { POSTLIST } from '../querys/PostListQuery';
import { PostList } from '../components/Post/PostList';
import { Pages } from "../components/Pages";
import { Loading } from '../components/common/Loding';
import { Error } from '../components/common/Error';

export const PostListContainer = () => {

    const [count, setCount] = useState<number>(6);
    const [page, setPage] = useState<number>(1);

    const { loading, error, data } = useQuery(POSTLIST, { 
        variables: {
            categoryId: 1,
            count,
            page
        }
    });

    window.onpopstate = function() {
        let currentPage = window.location.pathname.split("page=")[1];
        if(currentPage === undefined){
            setPage(1);
        }else{
            setPage(+currentPage);
        }
    }

    useEffect(() => {
        if(data?.getPostList?.__typename !== "PostListSuccess"){
            console.log(data?.getPostList?.message);
        }
    }, [data])

    if(loading) return <Loading />
    else if(error) return <Error />
    else{
        return(
            <Pages total={data?.getPostList?.data?.postsQuantity} each={count} page={page} setPage={setPage}>
                <PostList postList={data?.getPostList?.data?.posts} postsQuantity={data?.getPostList?.data?.postsQuantity} />
            </Pages>
        );
    }
}
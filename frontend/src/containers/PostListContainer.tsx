import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { POSTLIST } from '../querys/PostListQuery';
import { PostList } from '../components/Post/PostList';
import { Pages } from "../components/Pages";
import { useHistory } from 'react-router-dom';
import { Loading } from '../components/common/Loding';
import { Error } from '../components/common/Error';

export const PostListContainer = () => {

    const history = useHistory();

    let currentPage = +window.location.pathname.split("page=")[1];

    const [count, setCount] = useState<number>(3);
    const [page, setPage] = useState<number>(1);

    const { loading, error, data } = useQuery(POSTLIST, { 
        variables: { 
            count: 3,
            page: page
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

    if(loading) return <Loading /> 
    else if(error) return <Error />
    else{
        return(
            <Pages total={data?.getAllPosts?.postCnt} each={count} page={page} setPage={setPage}>
                <PostList postList={data?.getAllPosts?.posts} />
            </Pages>
        );
    }
}
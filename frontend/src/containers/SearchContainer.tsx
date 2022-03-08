import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { SEARCH } from '../querys/SearchQuery';
import { SearchList } from '../components/SearchList';
import { Loading } from '../components/common/Loding';
import { Error } from '../components/common/Error';
import { Pages } from "../components/Pages";

interface Props{
    searchWord: string
}

export const SearchContainer = ({ searchWord }: Props) => {

    const [count, setCount] = useState<number>(6);
    const [page, setPage] = useState<number>(1);

    const { loading, error, data } = useQuery(SEARCH, { 
        variables: {
            text: searchWord,
            count,
            page
        }
    });

    useEffect(() => {
        
    }, [])

    if(loading) return <Loading />
    else if(error) return <Error />
    else{
        return(
            <SearchList searchList={data?.getSearch?.data?.search} searchQuantity={data?.getSearch?.data?.searchQuantity} />
        );
    }
}
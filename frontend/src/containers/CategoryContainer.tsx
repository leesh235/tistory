import { CategoryList } from '../components/CategoryList';
import { useQuery } from '@apollo/client';
import { CATEGORYLIST } from '../querys/CategoryQuery';
import { Error } from '../components/common/Error';
import { useDispatch } from "react-redux";
import { setCategoryId } from "../redux/actions/category";
import { useScroll } from '../hooks/useScroll';
import { useEffect } from 'react';

export const CategoryContainer = () => {

    const { loading, data, error } = useQuery(CATEGORYLIST);
    const y = useScroll();

    const dispatch = useDispatch();

    const handleClickCategory = (id: number) => {
        dispatch(setCategoryId(id));
    }

    useEffect(() => {

    },[y.scrollY])

    if(error) return <Error />
    else{
        return(
            <CategoryList category={data?.getCategoryList?.data} handleClickCategory={handleClickCategory} scrollY={y.scrollY} />
        );
    }
}
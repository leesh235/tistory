import { CategoryList } from '../components/CategoryList';
import { useQuery } from '@apollo/client';
import { CATEGORYLIST } from '../querys/CategoryQuery';
import { Error } from '../components/common/Error';
import { useDispatch } from "react-redux";
import { setCategoryId } from "../redux/actions/category";
import { useScroll } from '../hooks/useScroll';
import { useEffect } from 'react';
import { routes } from '../routes';
import { useHistory } from 'react-router-dom';

export const CategoryContainer = () => {

    const { loading, data, error } = useQuery(CATEGORYLIST);
    const y = useScroll();

    const dispatch = useDispatch();
    const history = useHistory();

    const handleClickCategory = (id: number) => {
        dispatch(setCategoryId(id));
        if(window.location.pathname !== routes.home){
            history.push(`${routes.home}`)
        }
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
import { CategoryList } from '../components/CategoryList';
import { useQuery } from '@apollo/client';
import { CATEGORYLIST } from '../querys/CategoryQuery';
import { Error } from '../components/common/Error';
import { useDispatch, useSelector } from "react-redux";
import { setCategoryId } from "../redux/actions/category";
import { setSearch } from '../redux/actions/search';
import { useScroll } from '../hooks/useScroll';
import { useEffect } from 'react';
import { routes } from '../routes';
import { useHistory } from 'react-router-dom';

export const CategoryContainer = () => {

    const { loading, data, error } = useQuery(CATEGORYLIST);
    const y = useScroll();

    const dispatch = useDispatch();
    const history = useHistory();
    const store_categoryId = useSelector((state: any) => state.category.categoryId);

    const handleClickCategory = (id: number) => {
        dispatch(setSearch(""));
        dispatch(setCategoryId(id));
        if(window.location.pathname !== routes.home){
            history.push(`${routes.home}`)
        }
    }

    useEffect(() => {
        if(window.location.pathname === routes.noticeList){
            handleClickCategory(2);
            window.history.pushState({}, '', window.origin + `${routes.noticeList}`);
        }
    },[y.scrollY])

    if(error) return <Error />
    else{
        return(
            <CategoryList category={data?.getCategoryList?.data} handleClickCategory={handleClickCategory} scrollY={y.scrollY} />
        );
    }
}
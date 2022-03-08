import { useSelector } from "react-redux";
import { PostListContainer } from "./PostListContainer";
import { NoticeListContainer } from "./NoticeListContainer";
import { SearchContainer } from "./SearchContainer";
import { routes } from "../routes";

export const HomeContainer = () => {

    const store_categoryId = useSelector((state: any) => state.category.categoryId);
    const store_searchWord = useSelector((state: any) => state?.search.search);

    if(store_searchWord !== ""){
        return(
            <SearchContainer searchWord={store_searchWord} />
        );
    }else if(store_categoryId === 2){
        return(
            <NoticeListContainer />
        );
    }else{
        return(
            <PostListContainer />
        );
    }
}
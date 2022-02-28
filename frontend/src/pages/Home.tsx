import styled from 'styled-components';
import { PostListContainer } from '../containers/PostListContainer';
import { CategoryContainer } from '../containers/CategoryContainer';
import { NoticeListContainer } from '../containers/NoticeListContainer';
import { PC, Tablet, Mobile } from '../utils/responsive';
import { useSelector } from "react-redux";

const Wrapper = styled.main`
    width: 100%;
    display: grid;

    @media screen and (min-width: 64em){
        grid-template-columns: 1fr 5fr;
        grid-template-rows: auto;
        align-items: start;
        column-gap: 20px;
    }
    @media screen and (max-width: 63.94em) and (min-width: 22.5em){
        grid-template-columns: 50px auto 50px;
    }
    @media screen and (max-width: 22.44em){
        padding-top: 10px;
    }
`;

const Home = () => {

    const store_categoryId = useSelector((state: any) => state.category.categoryId);
    
    return(
        <Wrapper>
            <PC>
                <CategoryContainer />
                {store_categoryId !== -1 ? <PostListContainer />: <NoticeListContainer />}
            </PC>

            <Tablet>
                <CategoryContainer />
                <div></div>
                {store_categoryId !== -1 ? <PostListContainer />: <NoticeListContainer />}
                <div></div>
            </Tablet>

            <Mobile>
                <CategoryContainer />
                {store_categoryId !== -1 ? <PostListContainer />: <NoticeListContainer />}
            </Mobile>
        </Wrapper>
    );
}

export default Home;
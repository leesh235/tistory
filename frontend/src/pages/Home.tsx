import styled from 'styled-components';
import { PostListContainer } from '../containers/PostListContainer';
import { CategoryContainer } from '../containers/CategoryContainer';
import { PC, Tablet, Mobile } from '../utils/responsive';

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
        grid-template-columns: 70px auto;
    }
    @media screen and (max-width: 22.44em){
        padding-top: 10px;
    }
`;

const Home = () => {
    return(
        <Wrapper>
            <PC>
                <CategoryContainer />
                <PostListContainer />
            </PC>

            <Tablet>
                <CategoryContainer />
                <div></div>
                <PostListContainer />
            </Tablet>

            <Mobile>
                <CategoryContainer />
                <PostListContainer />
            </Mobile>
        </Wrapper>
    );
}

export default Home;
import styled from 'styled-components';
import { PostListContainer } from '../containers/PostListContainer';
import { CategoryContainer } from '../containers/CategoryContainer';

const Wrapper = styled.main`
    display: flex;
    flex-direction: row;
    width: 100%;
`;

const Home = () => {
    return(
        <Wrapper>
            <CategoryContainer />
            <PostListContainer />
        </Wrapper>
    );
}

export default Home;
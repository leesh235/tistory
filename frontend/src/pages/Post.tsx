import styled from 'styled-components';
import { PostContainer } from '../containers/PostContainer';
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
            <PostContainer />
        </Wrapper>
    );
}

export default Home;
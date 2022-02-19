import styled from 'styled-components';
import { PostListContainer } from '../containers/PostListContainer';
import { CategoryContainer } from '../containers/CategoryContainer';
import { PC, Tablet, Mobile } from '../utils/responsive';

const Wrapper = styled.main`
    display: flex;
    flex-direction: row;
    width: 100%;
`;

const ListButton = styled.div`
    cursor: pointer;
`;

const Home = () => {
    return(
        <Wrapper>
            <PC>
                <CategoryContainer />
                <PostListContainer />
            </PC>

            <Tablet>
                <ListButton>버튼</ListButton>
                <PostListContainer />
            </Tablet>

            <Mobile>
                <PostListContainer />
            </Mobile>
        </Wrapper>
    );
}

export default Home;
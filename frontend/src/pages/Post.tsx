import styled from 'styled-components';
import { PostContainer } from '../containers/PostContainer';
import { CategoryContainer } from '../containers/CategoryContainer';
import { CommentListContainer } from '../containers/CommentListContainer';
import { WriteCommentContainer } from '../containers/WriteCommentContainer';
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
        grid-template-columns: 50px auto 50px;
    }
    @media screen and (max-width: 22.44em){
        padding-top: 10px;
    }
`;

const FlexWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    >:nth-child(n+1){
        margin-bottom: 30px;
    }
`;

const Home = () => {
    return(
        <Wrapper>
            <PC>
                <CategoryContainer />
                <FlexWrapper>
                    <PostContainer />
                    <WriteCommentContainer />
                    <CommentListContainer />
                </FlexWrapper>
            </PC>

            <Tablet>
                <CategoryContainer />
                <div></div>
                <FlexWrapper>
                    <PostContainer />
                    <WriteCommentContainer />
                    <CommentListContainer />
                </FlexWrapper>
                <div></div>
            </Tablet>

            <Mobile>
                <CategoryContainer />
                <FlexWrapper>
                    <PostContainer />
                    <WriteCommentContainer />
                    <CommentListContainer />
                </FlexWrapper>
            </Mobile>
        </Wrapper>
    );
}

export default Home;
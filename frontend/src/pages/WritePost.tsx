import styled from 'styled-components';
import { PC, Tablet, Mobile } from '../utils/responsive';
import { WritePostContainer } from '../containers/WritePostContainer';

const Wrapper = styled.main`

`;

const WritePost = () => {
    return(
        <Wrapper>
            <WritePostContainer />
        </Wrapper>
    );
}

export default WritePost;
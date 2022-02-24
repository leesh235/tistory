import styled from 'styled-components';
import { PC, Tablet, Mobile } from '../utils/responsive';
import { WriteNoticeContainer } from '../containers/WriteNoticeContainer';

const Wrapper = styled.main`

`;

const WriteNotice = () => {
    return(
        <Wrapper>
            <WriteNoticeContainer />
        </Wrapper>
    );
}

export default WriteNotice;
import styled from 'styled-components';
import { PC, Tablet, Mobile } from '../utils/responsive';
import { NoticeContainer } from '../containers/NoticeContainer';

const Wrapper = styled.main`

`;

const Notice = () => {
    return(
        <Wrapper>
            <NoticeContainer />
        </Wrapper>
    );
}

export default Notice;
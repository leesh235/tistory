import styled from 'styled-components';
import { NoticeListContainer } from '../containers/NoticeListContainer';
import { PC, Tablet, Mobile } from '../utils/responsive';

const Wrapper = styled.main`
    width: 100%;
`;

const NoticeHome = () => {
    return(
        <Wrapper>
            <NoticeListContainer />
        </Wrapper>
    );
}

export default NoticeHome;
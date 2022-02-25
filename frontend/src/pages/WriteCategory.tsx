import styled from 'styled-components';
import { PC, Tablet, Mobile } from '../utils/responsive';
import { WriteCategoryContainer } from '../containers/WriteCategoryContainer';

const Wrapper = styled.main`

`;

const WriteCategory = () => {
    return(
        <Wrapper>
            <WriteCategoryContainer />
        </Wrapper>
    );
}

export default WriteCategory;
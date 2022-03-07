import styled from 'styled-components';
import { PC, Tablet, Mobile } from '../utils/responsive';
import { WriteCategoryContainer } from '../containers/WriteCategoryContainer';
import { ModifyCategoryContainer } from '../containers/ModifyCategoryContainer';

const Wrapper = styled.main`
    display: grid;
    grid-template-columns: 1fr 3fr;
`;

const WriteCategory = () => {
    return(
        <Wrapper>
            <ModifyCategoryContainer />
            <WriteCategoryContainer />
        </Wrapper>
    );
}

export default WriteCategory;
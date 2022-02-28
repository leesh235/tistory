import styled from 'styled-components';
import { PC, Tablet, Mobile } from '../utils/responsive';
import { NoticeContainer } from '../containers/NoticeContainer';
import { CategoryContainer } from '../containers/CategoryContainer';

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

const Notice = () => {
    return(
        <Wrapper>
            <PC>
                <CategoryContainer />
                <NoticeContainer />
            </PC>

            <Tablet>
                <CategoryContainer />
                <div></div>
                <NoticeContainer />
                <div></div>
            </Tablet>

            <Mobile>
                <CategoryContainer />
                <NoticeContainer />
            </Mobile>
        </Wrapper>
    );
}

export default Notice;
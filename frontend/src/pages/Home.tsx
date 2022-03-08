import styled from 'styled-components';
import { CategoryContainer } from '../containers/CategoryContainer';
import { HomeContainer } from '../containers/HomeContainer';

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
        >:nth-child(2) { grid-column: 2 / 3; grid-row: 1 / 2 ;}
    }
    @media screen and (max-width: 22.44em){
        padding-top: 10px;
    }
`;

const Home = () => {
    return(
        <Wrapper>
            <CategoryContainer />
            <HomeContainer />
        </Wrapper>
    );
}

export default Home;
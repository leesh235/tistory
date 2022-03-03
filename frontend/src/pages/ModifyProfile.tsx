import styled from 'styled-components';
import { ModifyProfileContainer } from '../containers/ModifyProfileContainer';
import { Button } from "../components/common/Button";
import { LinkButton } from "../components/common/LinkButton";
import { routes } from '../routes';

const Wrapper = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

const ModifyProfile = () => {
    return(
        <Wrapper>
            <ModifyProfileContainer />
        </Wrapper>
    );
}

export default ModifyProfile;
import styled from "styled-components";
import { LogInContainer } from "../containers/LogInContainer";

const Wrapper = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const LogIn = () => {
    return (
        <Wrapper>
            <LogInContainer />
        </Wrapper>
    );
}

export default LogIn;
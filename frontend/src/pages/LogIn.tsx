import styled from "styled-components";
import { LogInContainer } from "../containers/LogInContainer";

const Wrapper = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const LogIn = () => {
    return (
        <Wrapper>
            <LogInContainer />
        </Wrapper>
    );
}
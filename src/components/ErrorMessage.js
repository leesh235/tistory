import styled from "styled-components";

const Wrapper = styled.div`
    height: auto;
    min-height: 15px;
    font-size: 1rem;
    color: red;
`;

export const ErrorMessage = ({children}) => {
    return(
        <Wrapper>{children}</Wrapper>
    );
}
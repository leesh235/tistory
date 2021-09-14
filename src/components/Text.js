import styled from "styled-components";

const Wrapper = styled.p`
    ${prop => prop.props}
`;

export const Text = ({props, text}) => {
    return(
        <Wrapper props={props}>{text}</Wrapper>
    );
}
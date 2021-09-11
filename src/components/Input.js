import styled from "styled-components";

const Wrapper = styled.input`
    ${prop => prop.props}
`;

export const Input = ({props}) => {
    return(
        <Wrapper props={props}/>
    );
}
import styled from "styled-components";

const Wrapper = styled.button`
    ${prop => prop.props}
`;

export const Button = ({props}) => {
    return(
        <Wrapper props={props}/>
    );
}
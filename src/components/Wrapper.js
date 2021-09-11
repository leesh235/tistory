import styled from "styled-components";

const FlexWrapper = styled.section`
    ${prop => prop.props}
`;

export const Wrapper = ({props}) => {
    return(
        <FlexWrapper props={props}/>
    );
}
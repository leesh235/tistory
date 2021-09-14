import styled from "styled-components";

const Wrapper = styled.div`
    border-bottom: 1px solid gray;
    ${prop => prop.props}
`;

export const LineStyle = ({props}) => {
    return(
        <Wrapper props={props} />
    );
}
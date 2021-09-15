import styled from "styled-components";

const Wrapper = styled.div`
    width: ${p=>p.w};
    border-bottom: 1px solid ${p=>p.color};
`;

export const LineStyle = ({w, color="gray"}) => {
    return(
        <Wrapper w={w} color={color} />
    );
}
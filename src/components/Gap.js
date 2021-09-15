import styled from "styled-components";

const Wrapper = styled.div`
    width: ${p=>p.w};
    height: ${p=>p.h};
`;

export const Gap = ({w, h}) => {
    return(
        <Wrapper w={w} h={h}/>
    );
}
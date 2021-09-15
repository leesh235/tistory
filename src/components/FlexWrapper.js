import styled from "styled-components";

const Wrapper = styled.div`
    display: ${p=>p.display};
    flex-direction: ${p=>p.fd};
    align-items: ${p=>p.ai};
    justify-content: ${p=>p.jc};
    width: ${p=>p.w};
    height: ${p=>p.h};
`;

export const FlexWrapper = ({children, props}) => {
    return(
        <Wrapper {...props}>{children}</Wrapper>
    );
}
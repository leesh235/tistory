import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
    display: ${p=>p.display};
    flex-direction: ${p=>p.fd};
    align-items: ${p=>p.ai};
    justify-content: ${p=>p.jc};
    max-width: ${p=>p.maxW};
    width: ${p=>p.w};
    height: ${p=>p.h};
    margin: ${p=>p.m};
    ${p=>p.props}
`;

export const FlexWrapper = ({children, props, display, fd, ai, jc, maxW, w, h, m}) => {
    return(
        <Wrapper 
            props={props}
            display={display}
            fd={fd}
            ai={ai}
            jc={jc}
            maxW={maxW}
            w={w}
            h={h}
            m={m}
        >{children}</Wrapper>
    );
}

FlexWrapper.defaultProps = {
    display: "flex",
    ai: "flex-start",
    jc: "flex-start",
    w: "100%",
    h: "auto",
    m: "0px",
}

FlexWrapper.propTypes = {
    props: PropTypes.string,
    display: PropTypes.string,
    fd: PropTypes.string,
    ai: PropTypes.string,
    jc: PropTypes.string,
    w: PropTypes.string,
    h: PropTypes.string,
    m: PropTypes.string,
    maxW: PropTypes.string
}
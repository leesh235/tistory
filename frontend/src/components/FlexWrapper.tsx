import styled from "styled-components";

const Wrapper = styled.div<StyleProps>`
    display: ${p=>p.display};
    flex-direction: ${p=>p.fd};
    align-items: ${p=>p.ai};
    justify-content: ${p=>p.jc};
    max-width: ${p=>p.maxW};
    width: ${p=>p.w};
    height: ${p=>p.h};
    margin: ${p=>p.margin};
    padding: ${p=>p.padding};
    ${p=>p.props}
`;

interface StyleProps{
    props?: string,
    display?: string,
    fd?: string,
    ai?: string,
    jc?: string,
    maxW?: string,
    w?: string,
    h?: string,
    margin?: string,
    padding?: string
}

interface Props extends StyleProps{
    children: React.ReactNode
}

export const FlexWrapper: React.FC<Props> = ({children, props, display, fd, ai, jc, maxW, w, padding, margin}) => {
    return(
        <Wrapper 
            props={props}
            display={display}
            fd={fd}
            ai={ai}
            jc={jc}
            maxW={maxW}
            w={w}
            margin={margin} 
            padding={padding} 
        >{children}</Wrapper>
    );
}

FlexWrapper.defaultProps = {
    display: "flex",
    ai: "flex-start",
    jc: "flex-start",
    w: "100%",
    h: "auto",
    margin: "0px",
    padding: "0px",
}
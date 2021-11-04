import styled from "styled-components";

const PWrapper = styled.p<StyleProps>`
    margin: ${prop => prop.margin};
    padding: ${prop => prop.padding};
    ${prop => prop.props}

    font-size: ${prop => prop.fs};
    color: ${prop => prop.fc};
`;

const SpanWrapper = styled.span<StyleProps>`
    margin: ${prop => prop.margin};
    padding: ${prop => prop.padding};
    ${prop => prop.props}

    font-size: ${prop => prop.fs};
    color: ${prop => prop.fc};
`;

const DivWrapper = styled.div<StyleProps>`
    margin: ${prop => prop.margin};
    padding: ${prop => prop.padding};
    ${prop => prop.props}

    font-size: ${prop => prop.fs};
    color: ${prop => prop.fc};
`;

interface StyleProps{
    props?: string,
    text?: string,
    type?: string,
    margin?: string,
    padding?: string,
    fc?: string,
    fs?: string,
}

interface Props extends StyleProps{

}

export const Text = ({props, text, type, margin, padding, fc, fs} : Props) => {
    //p태그
    if(type === "p"){
        return(
            <PWrapper props={props} margin={margin} padding={padding} fc={fc} fs={fs}>{text}</PWrapper>
        );
    }
    //span태그
    else if(type === "span"){
        return(
            <SpanWrapper props={props} margin={margin} padding={padding} fc={fc} fs={fs}>{text}</SpanWrapper>
        );
    }
    //div태그
    else{
        return(
            <DivWrapper props={props} margin={margin} padding={padding} fc={fc} fs={fs}>{text}</DivWrapper>
        );
    }
}

Text.defaultProps = {
    margin: "0 0 0 0",
    padding: "0 0 0 0",
    fc: "black",
    fs: "1.6rem",
    type: "p",
}
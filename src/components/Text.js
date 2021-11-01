import styled from "styled-components";
import PropTypes from "prop-types";

const PWrapper = styled.p`
    margin: ${prop => prop.margin};
    padding: ${prop => prop.padding};
    ${prop => prop.props}

    font-size: ${prop => prop.fs};
    color: ${prop => prop.fc};
`;

const SpanWrapper = styled.span`
    margin: ${prop => prop.margin};
    padding: ${prop => prop.padding};
    ${prop => prop.props}

    font-size: ${prop => prop.fs};
    color: ${prop => prop.fc};
`;

const DivWrapper = styled.div`
    margin: ${prop => prop.margin};
    padding: ${prop => prop.padding};
    ${prop => prop.props}

    font-size: ${prop => prop.fs};
    color: ${prop => prop.fc};
`;


export const Text = ({props, text, type="p", margin, padding, fc, fs}) => {
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
    else if(type === "div"){
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
}

Text.propTypes = {
    text: PropTypes.string,
    type: PropTypes.string,
    props: PropTypes.string,
    margin: PropTypes.string,
    padding: PropTypes.string,
    fc: PropTypes.string,
    fs: PropTypes.string,
}
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.button`
    width: ${prop => prop.w};
    height: ${prop => prop.h};
    margin: ${prop => prop.margin};
    padding: ${prop => prop.padding};
    ${prop => prop.props}
    border: 0px;
    border-radius: 6px;
    background-color: ${prop => prop.color};

    font-size: ${prop => prop.fs};
    color: ${prop => prop.fcolor};
`;

export const Button = ({props, text,w, h, margin, padding, color, fcolor, onClick, fs}) => {
    return(
        <Wrapper 
            props={props} 
            w={w} 
            h={h} 
            margin={margin} 
            padding={padding} 
            color={color} 
            fcolor={fcolor} 
            fs={fs} 
            onClick={onClick}
        >{text}</Wrapper>
    );
}

Button.defaultProps = {
    color: "green",
    fcolor: "white",
    placeholer: "내용을 입력하세요",
    fs: "1rem",
    w: "300px",
    h: "30px",
    padding: "0"
}

Button.LineStyle = {
    text: PropTypes.string,
    color: PropTypes.string,
    fcolor: PropTypes.string,
    w: PropTypes.string,
    h: PropTypes.string,
    fs: PropTypes.string,
    margin: PropTypes.string,
    padding: PropTypes.string,
    onClick: PropTypes.func,
}
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.button`
    width: ${prop => prop.w};
    height: ${prop => prop.h};
    margin: ${prop => prop.m};
    padding: ${prop => prop.p};
    ${prop => prop.props}
    border: 0px;
    border-radius: 6px;
    background-color: ${prop => prop.color};

    font-size: 1rem;
    color: ${prop => prop.fcolor};
`;

export const Button = ({props, text,w, h, m, p, color, fcolor, onClick}) => {
    return(
        <Wrapper props={props} w={w} h={h} m={m} p={p} color={color} fcolor={fcolor} onClick={onClick}>{text}</Wrapper>
    );
}

Button.defaultProps = {
    color: "green",
    fcolor: "white",
    placeholer: "내용을 입력하세요",
}

Button.LineStyle = {
    text: PropTypes.string,
    color: PropTypes.string,
    fcolor: PropTypes.string,
    w: PropTypes.string,
    h: PropTypes.string,
    margin: PropTypes.string,
    padding: PropTypes.string,
    onClick: PropTypes.func,
}
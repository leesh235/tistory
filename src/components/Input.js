import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.input`
    width: ${prop => prop.w};
    height: ${prop => prop.h};
    margin: ${prop => prop.margin};
    padding: ${prop => prop.padding};
    border: solid 1px ${prop => prop.color};
    border-radius: 6px;

    color: ${prop => prop.color};
    font-size: ${prop => prop.fs};

    ::placeholder{
        color: ${prop => prop.color};
    }

    ${prop => prop.props}
`;

export const Input = ({props, type, w, h, margin, padding, color, fs, fcolor, placeholder, register, func}) => {
    return(
        <Wrapper 
            props={props}
            type={type}
            fs={fs}
            w={w} 
            h={h} 
            margin={margin} 
            padding={padding} 
            placeholder={placeholder}
            color={color}
            fcolor={fcolor}
            {...register}
            {...func}
        />
    );
}

Input.defaultProps = {
    color: "gray",
    fcolor: "black",
    placeholder: "내용을 입력하세요",
    fs: "1rem",
    type: "text",
    w: "356px",
    h: "45px"
}

Input.LineStyle = {
    type: PropTypes.string,
    fs: PropTypes.string,
    color: PropTypes.string,
    fcolor: PropTypes.string,
    w: PropTypes.string,
    h: PropTypes.string,
    margin: PropTypes.string,
    padding: PropTypes.string,
    placeholder: PropTypes.string,
    register: PropTypes.object,
    func: PropTypes.object,
}
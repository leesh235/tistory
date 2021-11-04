import styled from "styled-components";

const Wrapper = styled.input<StyleProps>`
    width: ${prop => prop.w};
    max-width: ${prop => prop.maxW};
    height: ${prop => prop.h};
    margin: ${prop => prop.margin};
    padding: ${prop => prop.padding};
    border: solid 1px ${prop => prop.color};
    border-radius: 6px;

    color: ${prop => prop.color};
    font-size: ${prop => prop.fs};

    ::placeholder{
        color: ${prop => prop.color};
        padding: ${prop => prop.padding};
    }

    ${prop => prop.props}
`;

interface StyleProps{
    props?: string,
    maxW?: string,
    w?: string,
    h?: string,
    margin?: string,
    padding?: string,
    color?: string,
    fs?: string,
    fcolor?: string,
}

interface Props extends StyleProps{
    type?: string,
    placeholder?: string,
    register?(): void,
    func?(): void,
}

export const Input = ({props, type, maxW, w, h, margin, padding, color, fs, fcolor, placeholder, register, func}: Props) => {
    return(
        <Wrapper 
            props={props}
            type={type}
            fs={fs}
            maxW={maxW}
            w={w} 
            h={h} 
            margin={margin} 
            padding={padding} 
            placeholder={placeholder}
            color={color}
            fcolor={fcolor}
            {...register}
            onInput={func}
        />
    );
}

Input.defaultProps = {
    color: "gray",
    fcolor: "black",
    placeholder: "내용을 입력하세요",
    fs: "1rem",
    type: "text",
    maxW: "352px",
    w: "282px",
    h: "20px",
    padding: "4px 8px"
}
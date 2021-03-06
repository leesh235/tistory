import styled from "styled-components";

const Wrapper = styled.input<StyleProps>`
    width: ${props => props.width};
    max-width: ${props => props.maxW};
    height: ${props => props.height};
    margin: 0px;
    padding: 0px;
    border: solid 1px ${props => props.color};
    border-radius: 6px;
    color: ${props => props.fc};
    font-size: ${props => props.fs};
    ::placeholder{
        color: ${props => props.color};
        padding: 0px;
    }
`;

interface StyleProps{
    props?: string,
    maxW?: string,
    width?: string,
    height?: string,
    color?: string,
    fs?: string,
    fc?: string,
}

interface Props extends StyleProps{
    type?: string,
    placeholder?: string,
    readOnly?: boolean,
    register?(): void,
    func?(): void,
}

export const Input = ({type, maxW, width, height,  color, fs, fc, readOnly, placeholder, register, func}: Props) => {
    return(
        <Wrapper 
            type={type}
            fs={fs}
            maxW={maxW}
            width={width} 
            height={height} 
            placeholder={placeholder}
            color={color}
            fc={fc}
            {...register}
            onInput={func}
            readOnly={readOnly}
        />
    );
}

Input.defaultProps = {
    color: "gray",
    fc: "gray",
    placeholder: "내용을 입력하세요",
    fs: "1.4rem",
    type: "text",
    maxW: "100%",
    width: "282px",
    height: "30px",
    readOnly: false,
}
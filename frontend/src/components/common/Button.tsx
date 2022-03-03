import styled from "styled-components";

const Wrapper = styled.button<StyleProps>`
    max-width: ${props => props.maxW};
    width: ${props => props.width};
    height: ${props => props.height};
    margin: 0px;
    padding: 0px;
    border: 0px;
    border-radius: 10px;
    background-color: ${props => props.color};
    box-shadow: 1px 2px 6px 0 rgba(0, 0, 0, 0.16);
    font-size: ${props => props.fs};
    color: ${props => props.fc};
`;

interface StyleProps {
    maxW?: string,
    width?: string,
    height?: string,
    color?: string,
    fc?: string,
    fs?: string,
}

interface  Props extends StyleProps {
    text?: string,
    type: "button" | "submit" | "reset",
    onClick?: () => void,
}

export const Button = ({text, type, maxW, width, height, color, fc, onClick, fs}: Props) => {
    return(
        <Wrapper 
            type={type}
            maxW={maxW}
            width={width} 
            height={height} 
            color={color} 
            fc={fc} 
            fs={fs} 
            onClick={onClick}
        >{text}</Wrapper>
    );
}

Button.defaultProps = {
    color: "white",
    fc: "black",
    fs: "1.4rem",
    width: "100%",
    maxW: "250px",
    height: "40px",
    type: "submit",
}
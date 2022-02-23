import styled from "styled-components";

const Wrapper = styled.button<StyleProps>`
    max-width: ${props => props.maxW};
    width: ${props => props.width};
    height: ${props => props.height};
    margin: 0px;
    padding: 0px;
    border: 0px;
    border-radius: 6px;
    background-color: ${propss => propss.color};

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
    onClick?: () => void,
}

export const Button = ({text, maxW, width, height, color, fc, onClick, fs}: Props) => {
    return(
        <Wrapper 
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
    color: "green",
    fc: "white",
    placeholer: "내용을 입력하세요",
    fs: "1.4rem",
    maxW: "370px",
    width: "282px",
    height: "30px",
}
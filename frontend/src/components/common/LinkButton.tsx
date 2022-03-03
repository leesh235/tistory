import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div<StyleProps>`
    max-width: ${props => props.maxW};
    width: ${props => props.width};
    height: ${props => props.height};
    border: 0px;
    border-radius: 10px;
    background-color: ${props => props.color};
    box-shadow: 1px 2px 6px 0 rgba(0, 0, 0, 0.16);
    font-size: ${props => props.fs};
    color: ${props => props.fc};

    >:nth-child(1){
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
    }
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
    pathname: string,
}

export const LinkButton = ({text, pathname, maxW, width, height, color, fc, fs}: Props) => {
    return(
        <Wrapper 
            maxW={maxW}
            width={width} 
            height={height} 
            color={color} 
            fc={fc} 
            fs={fs} 
        >
            <Link to={{
                pathname: `${pathname}`
            }}>
                {text}
            </Link>
        </Wrapper>
    );
}

LinkButton.defaultProps = {
    color: "white",
    fc: "black",
    fs: "1.4rem",
    width: "100%",
    maxW: "250px",
    height: "40px",
}
import styled from "styled-components";

const Wrapper = styled.textarea<StyleProps>`
    width: ${props => `calc(${props.width} - 20px)`};
    height: ${props => `calc(${props.height} - 20px)`};
    max-width: ${props => props.maxW};
    max-height: ${props => props.maxH};
    margin: 0px;
    padding: 10px;
    border: solid 1px ${props => props.color};
    border-radius: 6px;
    color: ${props => props.fc};
    font-size: ${props => props.fs};
    ::placeholder{
        color: ${props => props.color};
        padding: 0px;
    }
    ::-webkit-scrollbar{
        width: 0;
    }
    ::-webkit-scrollbar-thumb {
        border-radius: 0;
    }
    ::-webkit-scrollbar-track {
        border-radius: 0;
    }
`;

interface StyleProps {
    width?: string,
    height?: string,
    maxW?: string,
    maxH?: string,
    fs?: string,
    fc?: string,
    color?: string
}

interface Props extends StyleProps{
    placeholder?: string,
    register?: () => void,
    func?: () => void,
}

export const Textarea = ({ placeholder, width, height, maxW, maxH, fs, fc, color, register, func }: Props) => {
    return(
        <Wrapper 
            width={width}
            height={height}
            maxW={maxW}
            maxH={maxH}
            fs={fs}
            fc={fc}
            color={color}

            placeholder={placeholder}
            {...register}
        />
    );
}

Textarea.defaultProps = {
    placeholder: "",
    width: "100%",
    height: "100%",
    maxW: "100%",
    maxH: "100%",
    fc: "gray",
    fs: "1.4rem",
    color: "gray",
}
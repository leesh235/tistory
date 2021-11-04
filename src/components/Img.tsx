import styled from "styled-components";

const Wrapper = styled.img<StyleProps>`
    width: ${prop => prop.w};
    height: ${prop => prop.h};
`;

interface StyleProps{
    w?: string,
    h?: string,
}

interface Props extends StyleProps{
    img: string,
}

export const Img = ({img, w, h}: Props) => {
    return(
        <Wrapper src={img} w={w} h={h}/>
    );
}

Img.defaultProps = {
    w: "100%",
    h: "100%",
}
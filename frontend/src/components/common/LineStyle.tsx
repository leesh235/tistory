import styled from "styled-components";

const Wrapper = styled.div<StyleProps>`
    width: ${p=>p.w};
    border-bottom: 1px solid ${p=>p.color};
    margin: ${props => props.margin};
`;

interface StyleProps{
    w: string,
    color: string,
    margin: string,
}

interface Props extends StyleProps{

}

export const LineStyle = ({w, color, margin}: Props) => {
    return(
        <Wrapper w={w} color={color} margin={margin} />
    );
}

LineStyle.defaultProps = {
    color: "gray",
    w: "100%",
    margin: "5px 0",
}
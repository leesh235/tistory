import styled from "styled-components";

const Wrapper = styled.section<StyleProps>`

`;

interface StyleProps{

}

interface Props extends StyleProps{

}


export const Loading = ({}: Props) => {
    return(
        <Wrapper>loading...</Wrapper>
    );
}

Loading.defaultProps = {

}
import styled from "styled-components";

const Wrapper = styled.div`
    height: auto;
    min-height: 15px;
    font-size: 1rem;
    color: red;
`;

interface StyleProps{

}

interface Props extends StyleProps{
    children: React.ReactNode
}

export const ErrorMessage: React.FC<Props> = ({ children }) => {
    return(
        <Wrapper>{children}</Wrapper>
    );
}
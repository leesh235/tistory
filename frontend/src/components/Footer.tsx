import styled from "styled-components";
import { Text } from "./common/Text";

const Wrapper = styled.section`
    width: 100%;
    height: 60px;
    background-color: #f0f0f0;
    box-shadow: 0px -0.5px 3px gray;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const FooterStyle = styled.div`
    width: 90%;
    height: auto;
`;

export const Footer = () => {
    return(
        <Wrapper>
            <FooterStyle>
                <Text text={"Leesh's tistory"} fc={"gray"} />
            </FooterStyle>
        </Wrapper>
    );
}
import styled from "styled-components";

const BodyStyle = styled.div`
    width: 100vw;
    height:200px;
    background-color: silver;
    box-shadow: 0px -0.5px 3px gray;
`;

const FooterStyle = styled.div`
    display: flex;
    flex-direction: column;
`;

const SelectStyle = styled.div`

`;

const AddressStyle = styled.div`

`;

export const Footer = () => {
    return(
        <BodyStyle>
            <FooterStyle>
                <SelectStyle>select</SelectStyle>
                <AddressStyle>address</AddressStyle>
            </FooterStyle>
        </BodyStyle>
    );
}
import React from "react";
import styled from "styled-components";

const BodyStyle = styled.div`
    width: auto;
    height: auto;
`;

const FooterStyle = styled.div`
    display: flex;
    flex-direction: column;
    margin-top:120px;
`;

const SelectStyle = styled.div`

`;

const AddressStyle = styled.div`

`;

class Footer extends React.Component{
    render(){
        return(
            <BodyStyle>
                <FooterStyle>
                    <SelectStyle>select</SelectStyle>
                    <AddressStyle>address</AddressStyle>
                </FooterStyle>
            </BodyStyle>
        );
    }
}

export default Footer;
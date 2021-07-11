import React from "react";
import styled from "styled-components";

const BodyStyle = styled.div`
    min-width: 100%;
    height: auto;
`;

const FooterStyle = styled.div`
    display: flex;
    flex-direction: column;
    margin-top:100px;
    height:200px;
    border-top: 1px solid gray;
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
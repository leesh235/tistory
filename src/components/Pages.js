import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";

const BodyStyle = styled.div`
    width: auto;
    height: auto;
    margin: 0px 100px 0px 100px
`;

const PagesContainer = styled.div`
    margin-top: 100px;
`;

const PagesStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const PageStyle = styled.div`
    margin: 0px 10px 0px 10px;
`;

const BntStyle = styled.button`

`;

export const Pages = ({ getDate, pageNum }) => {

    const arr=[1, 2, 3, 4, 5];

    const handleMinus = () => {
        if(arr[0] !== 1){
            this.setState({
                arr: arr.map(i => {return i = i - 1;})
            })
        }
    }

    const handleAdd = () => {
        if(pageNum > 5 && arr[4] < pageNum){
            this.setState({
                arr: arr.map(i => {return i = i + 1;})
            })
        }
    }

    return(
        <BodyStyle>
            <PagesContainer>
                <PagesStyle>
                    <BntStyle onClick={handleMinus}>◀</BntStyle>
                    {arr.map(i => {
                        if(i <= pageNum){
                            return(
                                <PageStyle key={i}><Link onClick={() => {
                                    getDate(i)
                                }} to={{
                                    pathname:`/page=${i}`,
                                    state:{
                                        i
                                    }
                                }}>{i}</Link></PageStyle>
                            );
                        }
                        return "";
                    })}
                    <BntStyle onClick={handleAdd}>▶</BntStyle>
                </PagesStyle>
            </PagesContainer>
        </BodyStyle>
    );
}
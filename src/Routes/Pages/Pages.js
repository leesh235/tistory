import React from "react";
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

class Pages extends React.Component{
    state={
        arr:[1, 2, 3, 4, 5],
        //num: this.props.pagenum
        num: 7
    }
    
    handleMinus = () => {
        const {arr} = this.state
        if(arr[0] !== 1){
            this.setState({
                arr: arr.map(i => {return i = i - 1;})
            })
        }
        console.log(arr)
    }

    handleAdd = () => {
        const {arr,num} = this.state
        if(num > 5 && arr[4] < num){
            this.setState({
                arr: arr.map(i => {return i = i + 1;})
            })
        }
        console.log(arr)
    }

    render(){
        const {arr} = this.state
        return(
            <BodyStyle>
                <PagesContainer>
                    <PagesStyle>
                        <BntStyle onClick={this.handleMinus}>m</BntStyle>
                        {arr.map(i => {
                            return(
                                <PageStyle><Link onClick={() => {
                                    this.props.getDate(i)
                                }} to={{
                                    pathname:`/page=${i}`,
                                    state:{
                                        i
                                    }
                                }}>{i}</Link></PageStyle>
                            );
                        })}
                        <BntStyle onClick={this.handleAdd}>a</BntStyle>
                    </PagesStyle>
                </PagesContainer>
            </BodyStyle>
        );
    }
}

export default Pages;
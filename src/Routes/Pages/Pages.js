import React from "react";
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
    background-color: pink;
    margin: 0px 10px 0px 10px;
`;

const BntStyle = styled.button`

`;

class Pages extends React.Component{
    constructor(props){
        super(props);
        this.state={
            arr:[],
            num:this.props.pagenum
        }
        
    }

    initArr = () => {
        const {num} = this.state
        let i = 0, cnt = 0
        let array= []
        if(num <= 5){
            for(i = 0; i < num; i++){
                cnt++
                array[i] = cnt
            }
        }else{
            for(i = 0; i < 5; i++){
                cnt++
                array[i] = cnt
            }
        }
        this.setState({arr:array})
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
                                <PageStyle>{i}</PageStyle>
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
import React from "react";
import styled from "styled-components"

const BodyStyle = styled.div`
    width: auto;
    height: auto;
    margin: 50px 100px 0px 100px;
`;

const PagesContentStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center
`;

const PagesStyle = styled.div`
    display: flex;
    flex-direction: row;
`;

const PageStyle = styled.div`
    margin: 0px 10px 0px 10px;
`;

class PagesPresenter extends React.Component {
    state={
        array: [],
        num: this.props.pagenum
    }

    initArray = () =>{
        this.setState({
            array: this.state.array.map((i, index) => {
                if(index !== this.state.num){
                    return i = i + 1;
                }
            })
        })
    }

    handleMinus = () => {
        if(this.state.array[0] !== 1){
            this.setState({
                array: this.state.array.map(i => {
                    return i = i - 1;
                })
            })
        }
        console.log(this.state.array)
    }

    handleAdd = () => {
        this.setState({
            array: this.state.array.map(i => {
                return i = i + 1;
            })
        })
        console.log(this.state.array)
    }
    render(){
        const {array, num} = this.state
        return(
            <BodyStyle>
                <PagesContentStyle>
                    <button onClick={this.handleMinus}>minus</button>
                    <PagesStyle>
                        {array.map(i => {
                            return <PageStyle>{i}</PageStyle>
                        })}
                    </PagesStyle>
                    <button onClick={this.handleAdd}>_add_</button>
                </PagesContentStyle>
            </BodyStyle>
        );
    }
}

export default PagesPresenter;
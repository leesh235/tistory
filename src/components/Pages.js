import React, {useState, useEffect} from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: ${p => p.margin};
`;

const Page = styled.div`
    margin: 0 10px;
    cursor: pointer;
    color: ${p => p.color};
`;

const UpButton = styled.div`
    margin: 0 0 0 5px;
    cursor: pointer;
`;

const DownButton = styled.div`
    margin: 0 10px 0 0;
    cursor: pointer;
`;

export const Pages = ({ total = 0, each = 0, page, setPage, margin }) => {

    const calculate = Math.ceil(total / each);
    console.log(margin)

    const [selected, setSelected] = useState(page);

    const pageCntHandelr = () => {
        let arr = [];
        for(let i = 1; i <= calculate; i++){
            arr.push(i);
        }
        return arr;
    }

    const pageHandler = (val) => {
        setPage(val)
        setSelected(val)
    }

    const upHandler = () => {
        if(page < calculate){
            setPage(pre => pre + 1)
            setSelected(page + 1)
        }else{
            setPage(calculate)
            setSelected(calculate)
        }
    }

    const downHandler = () => {
        if(page > 1){
            setPage(pre => pre - 1)
            setSelected(page - 1)
        }else{
            setPage(1)
            setSelected(1)
        }
    } 

    return(
        <Wrapper margin={margin}>
            <DownButton onClick={downHandler}>{"<"}</DownButton>
            {pageCntHandelr().map((val, idx) => {
                if(val === selected){
                    return(
                        <Page key={idx} onClick={() => pageHandler(val)} color={"red"}>{val}</Page>
                    );
                }else{
                    return(
                        <Page key={idx} onClick={() => pageHandler(val)}>{val}</Page>
                    );
                }
            })}
            <UpButton onClick={upHandler}>{">"}</UpButton>
        </Wrapper>
    );
}
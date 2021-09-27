import React, {useState, useEffect} from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const Page = styled.div`
    margin: 0 3px;
`;

const UpButton = styled.div`
    margin: 0 0 0 3px;
    cursor: pointer;
`;

const DownButton = styled.div`
    margin: 0 3px 0 0;
    cursor: pointer;
`;

export const Pages = ({ total = 0, each = 0, max = 1 }) => {

    const calculate = total / each + 1;

    const [page, setPage] = useState(max);

    const pageHandler = () => {
        let arr = [];
        for(let i = 1; i <= calculate; i++){
            arr.push(i);
        }
        return arr;
    }

    const upHandler = () => {
        if(page < calculate){
            setPage(pre => pre + 1)
        }
    }

    const downHandler = () => {
        if(page > 1){
            setPage(pre => pre - 1)
        }
    }
    useEffect(() => {

    },[])

    return(
        <Wrapper>
            <UpButton onClick={upHandler}>up</UpButton>
            {pageHandler().map((idx) => {
                if(idx <= max){
                    return(
                        <Page key={idx}>{idx}</Page>
                    );
                }
            })}
            <DownButton onClick={downHandler}>down</DownButton>
        </Wrapper>
    );
}
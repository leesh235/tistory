import React, {useState, useEffect} from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
    
`;

const Page = styled.div`

`;
const UpButton = styled.div`

`;
const DownButton = styled.div`

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
import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div<StyleProps>`
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

interface StyleProps{
    margin?: string,
}

interface Props extends StyleProps{
    total: number,
    each: number,
    page: number,
    setPage(val: number): number,
}

export const Pages = ({ total, each, page, setPage, margin }: Props) => {

    const calculate: number = Math.ceil(total / each);
    console.log(margin)

    const [selected, setSelected] = useState<number>(page);

    const pageCntHandelr = () => {
        let arr = [];
        for(let i = 1; i <= calculate; i++){
            arr.push(i);
        }
        return arr;
    }

    const pageHandler = (val: number) => {
        setPage(val)
        setSelected(val)
    }

    const upHandler = () => {
        if(page < calculate){
            setPage(page + 1)
            setSelected(page + 1)
        }else{
            setPage(calculate)
            setSelected(calculate)
        }
    }

    const downHandler = () => {
        if(page > 1){
            setPage(page - 1)
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

Pages.defaultProps = {
    margin: "0 0 0 0",
    total: 0, 
    each: 1,
}
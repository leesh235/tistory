import { useEffect, useState } from 'react';
import styled from "styled-components";
import { useHistory } from 'react-router-dom';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const PageWrapper = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const Page = styled.li`
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

interface Props{
    total: number,
    each: number,
    page: number,
    setPage(val: number): void,
    children: JSX.Element
};

export const Pages = ({ total = 1, each, page, setPage, children}: Props) => {

    const history = useHistory();

    const calculate: number = Math.ceil(total / each);

    const [selected, setSelected] = useState<number>(page);

    const pageCntHandelr = () => {
        let arr = [];
        for(let i = 1; i <= calculate; i++){
            arr.push(i);
        }
        return arr;
    }

    const pageHandler = (val: number) => {
        setPage(val);
        setSelected(val);
        window.history.pushState({}, '', window.origin + (val === 1 ? `` : `/page=${val}`));
    }

    const upHandler = () => {
        if(page < calculate){
            setPage(page + 1);
            setSelected(page + 1);
            window.history.pushState({}, '', window.origin + `/page=${page + 1}`);
        }else{
            setPage(calculate);
            setSelected(calculate);
        }
    }

    const downHandler = () => {
        if(page > 1){
            setPage(page - 1);
            setSelected(page - 1);
            window.history.pushState({}, '', window.origin + (page - 1 === 1 ? `` : `/page=${page - 1}`));
        }else{
            setPage(1);
            setSelected(1);
        }
    }

    return(
        <Wrapper>
            {children}
            <PageWrapper>
                <DownButton onClick={downHandler}>{"<"}</DownButton>
                {pageCntHandelr().map((val, idx) => {
                    if(val === selected){
                        return(
                            <Page key={idx} onClick={() => pageHandler(val)} color={"red"}>
                                {val}
                            </Page>
                        );
                    }else{
                        return(
                            <Page key={idx} onClick={() => pageHandler(val)}>
                                {val}
                            </Page>
                        );
                    }
                })}
                <UpButton onClick={upHandler}>{">"}</UpButton>
            </PageWrapper>
        </Wrapper>
    );
}
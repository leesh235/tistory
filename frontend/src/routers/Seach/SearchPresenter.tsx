import React, {useState} from 'react';
import styled from 'styled-components';

const BodyStyle = styled.main`
    width: auto;
    height: 400px;
    margin: 50px 100px 50px 100px;
`;

const SearchStyle = styled.div`
    display: flex;
    flex-direction: row;
    margin-top:150px;
`;

const InputStyle = styled.input`
    padding: 10px 8px;
    margin-right: 10px;
    height: 40px;
    width: 200px;
    font-size: 15pt;
    border: 0px;
    border-bottom: 1px solid gray;
`;

const SeachBtn = styled.input`
    border: 0px;
    background-color: white;
`;

interface Props {
    setText(val: string): void
}

const SearchPresenter = ({setText}: Props) => {
    const [initText, setInitText] = useState<string>("");

    const handleText = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {target:{value}} = e
        setInitText(value);
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setText(initText);
    }

    return(
        <BodyStyle>
            <SearchStyle>
                <form  onSubmit={handleSubmit} >
                    <InputStyle type="text" name="title" placeholder="검색어 입력..." onChange={handleText}/>
                    <SeachBtn type="submit" value="검색"/>
                </form>
            </SearchStyle>
        </BodyStyle>
    );
}

export default SearchPresenter;
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

const InputStyle = styled.input.attrs({
    required:true
  })`
  height: 50px;
  width: 100%;
  font-size: 20pt;
  border: 0px;
  border-bottom: 1px solid gray;
`;


const SearchPresenter = ({searchName}) => {
    const [name, setName] = useState("");
    const handleName = (e) => {
        const {target:{value}} = e
        setName(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        searchName(name);
    }

    return(
        <BodyStyle>
            <SearchStyle>
                <form action="result" method="post" onSubmit={handleSubmit} >
                    <InputStyle type="text" name="title" placeholder="검색어 입력..." onChange={handleName}/>
                    <input type="submit" vlaue="submit" />
                </form>
            </SearchStyle>
        </BodyStyle>
    );
}

export default SearchPresenter;
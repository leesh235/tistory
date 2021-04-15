import React from 'react';
import styled from 'styled-components';

const BodyStyle = styled.main`
    width: auto;
    height: auto;
    margin: 50px 100px 50px 100px;
`;

const SearchStyle = styled.div`
    display: flex;
    flex-direction: row;
    background-color: pink;
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

function SearchPresenter(){
    return(
        <BodyStyle>
            <SearchStyle>
                <InputStyle type="text" name="search" placeholder="검색어 입력..."/>
            </SearchStyle>
        </BodyStyle>
    );
}

export default SearchPresenter;
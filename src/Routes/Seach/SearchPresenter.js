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

class SearchPresenter extends React.Component {
    render(){
        return(
            <BodyStyle>
                <SearchStyle>
                    <form action="/search_process" method="post" onSubmit={function(e){
                        e.preventDefault();
                        debugger;
                        alert("submit!!");
                    }}>
                        <InputStyle type="text" name="title" placeholder="검색어 입력..."/>
                        <input type="submit" />
                    </form>
                </SearchStyle>
            </BodyStyle>
        );
    }
}

export default SearchPresenter;
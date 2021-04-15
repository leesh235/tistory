import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BodyStyle = styled.main`
    width: auto;
    height: auto;
    margin: 50px 100px 50px 100px;
`;

const LinksStyle = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 1.3em;
`;

const LinkStyle = styled.div`
    margin: 0px 0px 10px 0px;
`;

class List extends React.Component{
    state={
        listName: ["home", "tag"]
    }
    render(){
        const {listName} = this.state
        return (
            <BodyStyle>
                <LinksStyle>
                    {listName.map(name => {
                        return (<LinkStyle><Link to={`/${name}`} >{name}</Link></LinkStyle>);
                    })}
                </LinksStyle>
            </BodyStyle>
        );
    }
}

export default List;
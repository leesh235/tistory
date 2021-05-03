import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const TextDiv = styled.div`
    a{
        text-decoration: none;
        color: inherit;
    }
`;

const MovieStyle = styled.div`
    display: flex;
    flex-direction: row;
    padding: 20px;
    border-bottom: 1px solid gray;
`;

const MovieData = styled.div`
    display: flex;
    flex-direction: column;
`;

const ImgStyle = styled.img`
    width:200px;
    height:200px;
`;

const StyleH4 = styled.h4`
    margin: 0;
    margin-bottom: 15px;
    margin-left: 20px;
`;

const StyleH5 = styled.h5`
    margin: 0;
    margin-bottom: 15px;
    margin-left: 20px;
`;

const StyleUl = styled.ul`
    height: 70px;
    margin: 0;
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    flex-wrap: wrap;
`;

const StyleLi = styled.li`
    margin-right: 60px;
`;

const StyleP = styled.p`
    margin: 0;
    margin-bottom: 15px;
    margin-left: 20px;
`;

function Contents({id, title, picture, year, genres, summary}){
    return(
        <TextDiv>
            <Link to={{
                pathname: `/detail${id}`
                }}>
                <MovieStyle key={id}>
                    <ImgStyle src={picture} alt={title} title={title} />
                    <MovieData>
                        <StyleH4>{title}</StyleH4>
                        <StyleH5>{year}</StyleH5>
                        <StyleUl>{genres.map((genres, index) => {
                            return <StyleLi key={index}>{genres}</StyleLi>
                        })}</StyleUl>
                        <StyleP>{summary}...</StyleP>
                    </MovieData>
                </MovieStyle>
            </Link>
        </TextDiv>
    );
}

export default Contents
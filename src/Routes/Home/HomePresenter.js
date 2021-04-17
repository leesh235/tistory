import React from 'react';
import "./Movie.css"
import styled from 'styled-components';
import Pages from "../Pages/Pages"

const BodyStyle = styled.main`
    width: auto;
    height: auto;
    margin: 30px 100px 50px 100px;
`;

const MovieStyle = styled.div`
    display: flex;
    flex-display: row;
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

class HomePresenter extends React.Component{
    state={
        page_id:1
    }
    initArr=(len)=>{
        let arr = []
        for(let i = 1; i <= len; i++){
            arr.push(i)
        }
        return arr
    }
    getDate = (index) =>{
        this.setState({page_id:index})
    }
    render(){
        const movies = this.props.movies
        const len = Math.ceil(movies.length / 8)
        const getDate = this.getDate
        const {page_id} = this.state
        const start = page_id * 8 - 7
        const end = page_id * 8
        return(//현재
            <BodyStyle>
                {this.props.isLoding ? "Loding..." : (
                    movies.map((movie, ind) => {
                        let cnt = ind + 1
                        if((start <= cnt) && (end >= cnt))
                        return(
                            <MovieStyle>
                                <ImgStyle src={movie.medium_cover_image} alt={movie.title} title={movie.title} />
                                <MovieData>
                                    <h4 className="movie__title">{movie.title}</h4>
                                    <h5 className="movie__year">{movie.year}</h5>
                                    <ul className="movie__genres">{movie.genres.map((genres, index) => {
                                        return <li key={index} className="genres__genre">{genres}</li>
                                    })}</ul>
                                    <p className="movie__summary">{movie.summary.slice(0,140)}...</p>
                                </MovieData>
                            </MovieStyle>
                        );
                    })
                )}
            <Pages getDate={getDate} len={len}/>
            </BodyStyle>
        );
    }
}

export default HomePresenter;
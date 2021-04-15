import React from 'react';
import axios from "axios";
import "./Movie.css"
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
        movies:[]
    }
    getMovies = async () => {
        const {data:{data:{movies}}} = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");
        this.setState({movies});
    }
    componentDidMount(){
        this.getMovies();
    }
    render(){
        const {movies} = this.state
        return (
            <BodyStyle>
                {movies.map(movie => {
                    return (
                    <MovieStyle>
                        <ImgStyle src={movie.medium_cover_image} alt={movie.title} title={movie.title} />
                            <MovieData>
                                <h3 className="movie__title">{movie.title}</h3>
                                <h5 className="movie__year">{movie.year}</h5>
                                <ul className="movie__genres">{movie.genres.map((genres, index) => {
                                    return <li key={index} className="genres__genre">{genres}</li>
                                })}</ul>
                                <p className="movie__summary">{movie.summary.slice(0,140)}...</p>
                            </MovieData>
                    </MovieStyle>
                    );
                })}
            </BodyStyle>
        );
    }
}

export default HomePresenter;
import React from 'react';
import "./Movie.css"
import styled from 'styled-components';
import Pages from "../Pages/Pages"
import { Link } from 'react-router-dom';

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
    constructor(props){
        super(props);
        this.state={
            movies: this.props.movies,
            page_id:1
        }

    }
    render(){
        const {movies, page_id} = this.state
        const pageNum = movies.length
        const len = Math.ceil(pageNum/8)
        const start = page_id * 8 - 7
        const end = page_id * 8

        return(//현재
            <BodyStyle>
                {(
                    movies.map((movie, ind) => {
                        let cnt = ind + 1
                        if((start <= cnt) && (end >= cnt))
                        {
                            return(
                                <Link to={{
                                    pathname: `/detail${movie.id}`
                                    }}>
                                    <MovieStyle key={ind}>
                                        <ImgStyle src={movie.medium_cover_image} alt={movie.title} title={movie.title} />
                                        <MovieData>
                                            <h4 className="movie__title">{movie.title}</h4>
                                            <h5 className="movie__year">{movie.year}</h5>
                                            <ul className="movie__genres">{movie.genres.map((genres, index) => {
                                                return <li key={index} className="genres__genre">{genres}</li>
                                            })}</ul>
                                            <p className="movie__summary">{movie?.summary?.slice(0,100)}</p>
                                        </MovieData>
                                    </MovieStyle>
                                </Link>
                            );
                        }
                        return "";
                    })
                )}
            <Pages getDate={(index) => {
                this.setState({page_id:index})
            }} pageNum={len}/>
            </BodyStyle>
        );
    }
}

export default HomePresenter;
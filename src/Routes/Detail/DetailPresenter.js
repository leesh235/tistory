import React from 'react';
import styled from 'styled-components';

const Title = styled.h2`

`;

const movieImg = styled.image`

`;

const mContents = styled.div`

`;

class DetailPresenter extends React.Component{
        constructor(props){
            super(props);
            this.state={
                movie: this.props.movie,
                isLoding: this.props.loding
            }

        }
    render(){
        const {isLoding,movie} = this.state
        return(
            <div>
               <div>{movie?.language} · {movie?.rating}</div>
            </div>
        );
    }
}

export default DetailPresenter;
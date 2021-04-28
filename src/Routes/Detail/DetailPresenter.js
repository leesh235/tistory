import React from 'react';
import styled from 'styled-components'

const Mcontents = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;
    height: auto;
    margin: 30px 100px 50px 100px;
`;

const Mheader = styled.div`
    display: flex;
    flex-direction: row;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

const Mimg = styled.img`
    width:200px;
    height:200px;

`;

const Mdiv = styled.div`
    display: flex;
    flex-direction: column;
`;

const Mtitle = styled.h2`

`;


const Mrationg = styled.div`

`;

const Mgenres = styled.ul`

`;

const Mgenre = styled.li`

`;

const Msummary = styled.div`

`;

class DetailPresenter extends React.Component{
        constructor(props){
            super(props);
            this.state={
                movie: this.props.movie
            }

        }
    render(){
        const {movie} = this.state
        return(
            <Mcontents>
                <Mheader>
                    <Mimg src={movie.medium_cover_image} alt={movie.title} title={movie.title} />
                    <Mdiv>
                        <Mtitle>{movie.title}</Mtitle>
                        <Mrationg>{movie.rating}</Mrationg>
                        <Mgenres>{movie.genres.map((g,index) => {
                            return(
                                <Mgenre key={index}>{g}</Mgenre>
                            )
                        })}</Mgenres>
                    </Mdiv>
                </Mheader>
                <Msummary>{movie.description_intro}</Msummary>
            </Mcontents>
        );
    }
}

export default DetailPresenter;
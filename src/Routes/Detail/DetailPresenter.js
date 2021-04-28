import React from 'react';
import styled from 'styled-components'

const Mcontents = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;
    height: auto;
    align-items: center;
    margin: 30px 100px 50px 100px;
`;

const HeaderSize = styled.div`
    width:1000px;
    height: 400px;
    margin-top:100px;
    margin-bottom:100px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    border-radius: 10px;
`;

const Mheader = styled.div`
    width: 100%;
    max-width: 700px;
    display: flex;
    flex-direction: row;
`;

const Mimg = styled.img`
    width:auto;
    height:auto;
    margin-top:30px;
    margin-left:30px;
`;

const Mdiv = styled.div`
    display: flex;
    flex-direction: column;
    margin: 30px 0px 10px 50px;
`;

const Mtitle = styled.h1`
    margin-left: 50px;
    margin-bottom: 10px;
`;


const Mrationg = styled.h4`
    margin-left: 60px;
    margin-bottom: 60px;
    color: red;
`;

const Mgenres = styled.ul`
    display: flex;
    flex-direction: column;
    height:150px;
    width: auto;
    margin-left: 30px;
`;

const Mgenre = styled.li`
    font-size: 20px;
`;

const Msummary = styled.div`
    width: 1200px;
    height: auto;
    font-size:22px;
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
                <HeaderSize>
                    <Mheader>
                        <Mimg src={movie.medium_cover_image} alt={movie.title} title={movie.title} />
                        <Mdiv>
                            <Mtitle>{movie.title}</Mtitle>
                            <Mrationg>★{movie.rating}</Mrationg>
                            <Mgenres>{movie.genres.map((g,index) => {
                                return(
                                    <Mgenre key={index}>{g}</Mgenre>
                                )
                            })}</Mgenres>
                        </Mdiv>
                    </Mheader>
                </HeaderSize>
                <Msummary>{movie.description_intro}</Msummary>
            </Mcontents>
        );
    }
}

export default DetailPresenter;
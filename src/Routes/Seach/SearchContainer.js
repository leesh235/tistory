import React from 'react';
// import axios from "axios";
import SearchPresenter from './SearchPresenter';

class SearchContainer extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isLoding: true,
            movies:[1,2,3,4,5,6,7]
        }
    }
    // getMovies = async () => {
    //     const {data:{data:{movies}}} = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");
    //     this.setState({movies, isLoding: false});
    // }
    searchContents = () =>{
        this.getMovies();
    }
    // componentDidMount(){
    //     this.getMovies();
    // }
    render(){//현재
        const {movies} = this.state
        return(
            <SearchPresenter searching={function(_search){
                let searchMovie = movies.filter(movie => movie===_search)
                this.setState({movies: searchMovie})
            }} />
        );
    }
}

export default SearchContainer;
import React from 'react';
import axios from "axios";
import HomePresenter from './HomePresenter';

class HomeContainer extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isLoding: true,
            movies:[]
        }
    }
    getMovies = async () => {
        const {data:{data:{movies}}} = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");
        this.setState({movies, isLoding: false});
    }
    componentDidMount(){
        this.getMovies();
    }
    render(){//현재
        return(
            <HomePresenter {...this.state} />
        );
    }
}

export default HomeContainer;
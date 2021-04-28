import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import List from './List';
import SearchContainer from '../Routes/Seach/SearchContainer';
import index from '../Routes/Home/index';
import DetailIndex from '../Routes/Detail/index'

class Routes extends React.Component{
    render(){
        return(
            <Router>
                <Header />
                <Route exact path="/search" component={SearchContainer} />
                <Route exact path="/list" component={List} />
                <Route path="/detail:id" component={DetailIndex} />
                <Route exact path="/" component={index} />
                <Route exact path="/page=:i" component={index} />
                <Footer />
            </Router>
        );
    }
}

export default Routes;
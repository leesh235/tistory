import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import List from './List';
import SearchContainer from '../Routes/Seach/SearchContainer';
import index from '../Routes/Home/index';

class Routes extends React.Component{
    render(){
        return(
            <Router>
                <Header />
                <Route exact={true} path="/search" component={SearchContainer} />
                <Route exact={true} path="/list" component={List} />
                <Route exact={true} path="/" component={index} />
                <Route exact={true} path="/page=:i" component={index} />
                <Footer />
            </Router>
        );
    }
}

export default Routes;
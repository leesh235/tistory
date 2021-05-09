import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import List from './List';
import SearchIndex from '../Routes/Seach/index';
import SearchList from '../Routes/Seach/SearchList';
import index from '../Routes/Home/index';
import DetailIndex from '../Routes/Detail/index'
import AddIndex from '../Routes/Add/index';

class Routes extends React.Component{
    render(){
        return(
            <Router>
                <Header />
                <Route exact path="/search" component={SearchIndex} />
                <Route exact path="/result" component={SearchList} />
                <Route exact path="/list" component={List} />
                <Route path="/detail:id" component={DetailIndex} />
                <Route exact path="/" component={index} />
                <Route exact path="/page=:i" component={index} />
                <Route exact path="/add" component={AddIndex} />
                <Footer />
            </Router>
        );
    }
}

export default Routes;
import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import List from './components/List';
import SearchPresenter from './Routes/Seach/SearchPresenter';
import HomeContainer from './Routes/Home/HomeContainer';

export default () => (
    <Router>
        <Header />
        <Route exact={true} path="/search" component={SearchPresenter} />
        <Route exact={true} path="/list" component={List} />
        <Route exact={true} path="/" component={HomeContainer} />
        <Route exact={true} path="/page=:i" component={HomeContainer} />
        <Footer />
    </Router>
)
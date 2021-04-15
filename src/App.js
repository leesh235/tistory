import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/Header';
import SearchPresenter from './Routes/Seach/SearchPresenter';
import HomePresenter from './Routes/Home/HomePresenter';
import List from './components/List';
import "./App.css";

class App extends React.Component{
  render(){
    return (
      <Router>
          <Header />
          <Route exact path="/search" component={SearchPresenter} />
          <Route exact path="/list" component={List} />
          <Route exact path="/home" component={HomePresenter} />
       </Router>
    );
  }
}

export default App;

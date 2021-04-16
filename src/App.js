import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchPresenter from './Routes/Seach/SearchPresenter';
import HomeContainer from './Routes/Home/HomeContainer';
import List from './components/List';
import "./App.css";

class App extends React.Component{
  render(){
    return (//현재
      <Router>
          <Header />
          <Route exact={true} path="/search" component={SearchPresenter} />
          <Route exact={true} path="/list" component={List} />
          <Route exact={true} path="/" component={HomeContainer} />
          <Route exact={true} path="/page=:i" component={HomeContainer} />
          <Footer />
       </Router>
    );
  }
}

export default App;

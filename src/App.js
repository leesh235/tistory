import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import "./App.css";
import Routes from './components/Routes';

class App extends React.Component{
  render(){
    return (//현재
      <div className="App">
        <Router>
          <Routes />
        </Router>
      </div>
    );
  }
}

export default App;

import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import "./App.css";
import Routes from './components/Routes';
import { useQuery } from '@apollo/client';
import { TOKENINFO } from "./apollo/tokenQuery";

const App = () => {

  const { data : {
    isLoggedIn
  }} = useQuery(TOKENINFO); 

  return (
      <div className="App">
        <Router>
          <Routes isLoggedIn={isLoggedIn} />
        </Router>
    </div>
  )
}

export default App;

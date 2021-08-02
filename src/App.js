import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import "./App.css";
import Routes from './components/Routes';
import { useQuery } from '@apollo/client';
import { TOKENINFO } from "./apollo/tokenQuery";
import { Provider } from 'react-redux';
import createStore from './redux/store';
import reducers from "./redux/reducers/index";

const store = createStore(reducers);

const App = () => {
  
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Routes />
        </Router>
      </div>
    </Provider>
  )
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ApolloProvider }from '@apollo/client';
import { Provider } from 'react-redux';
import client from './apollo/apollo';
import createStore from './redux/store';
import reducers from "./redux/reducers/index";
import "./env";

const store = createStore(reducers);

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
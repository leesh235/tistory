import React from 'react';
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./Style/GlobalStyle";
import { theme } from "./Style/theme";
import { BrowserRouter as Router} from 'react-router-dom';
import Routes from './components/Routes';
import { Provider } from 'react-redux';
import createStore from './redux/store';
import reducers from "./redux/reducers/index";

// const store = createStore(reducers);

const App = () => {
  
  return (
    // <Provider store={store}>
      <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Router>
            <Routes />
          </Router>
        </ ThemeProvider>
    // </Provider>
  )
}

export default App;

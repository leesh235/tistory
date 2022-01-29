import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle";
import { theme } from "./styles/theme";
import Routes from './components/Routes';
import { Provider } from 'react-redux';
import createStore from './redux/store';
import reducers from "./redux/reducers/index";

import { useQuery } from '@apollo/client';
import { TOKENINFO } from "./apollo/tokenQuery";

const store = createStore(reducers);

const App = () => {

  const {loading, data:{
    isLoggedIn
  }} = useQuery(TOKENINFO);
  
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes />
      </ ThemeProvider>
    </Provider>
  )
}

export default App;

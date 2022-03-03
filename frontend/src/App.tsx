import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle";
import { theme } from "./styles/theme";
import Routes from './components/Routes';

const App = () => {
  
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
    </ ThemeProvider>
  )
}

export default App;

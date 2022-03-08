import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle";
import { theme } from "./styles/theme";
import Routes from './components/Router/Routes';

import { useQuery } from '@apollo/client';
import { TOKENINFO } from "./apollo/tokenQuery";
import { PROFILE } from "./querys/ProfileQuery";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/actions/user";

const App = () => {

  const dispatch = useDispatch();

  const getLogInInfo = useQuery(TOKENINFO);

  const getUserInfo = useQuery(PROFILE);

  if(getLogInInfo?.data?.isLoggedIn){
    dispatch(setUser(getUserInfo?.data?.getProfile?.data.role));
  }
  
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
    </ ThemeProvider>
  )
}

export default App;

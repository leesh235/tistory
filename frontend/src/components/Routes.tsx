import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { Header } from './Header/Header';
import { Footer } from './Footer';
import Search from '../routers/Seach/index';
import Home from '../routers/Home/index';
import Detail from '../routers/Detail/index'
import Add from '../routers/Add/index';
import LogIn from '../routers/LogIn/index';
import SignUp from '../routers/SignUp/index';
import Profile from '../routers/Profile/index';
import MyPost from '../routers/MyPost/index';
import Forget from '../routers/ForgetPass/index';
import ModifyProfile from '../routers/ModifyProfile/index';
import ModifyPost from '../routers/ModifyPost/index';
import Unresister from '../routers/Unresister/index';
import { Page404 } from '../routers/Page404';
import SideMenu from './SideMenu';

const Wrapper = styled.main`
    width: 100%;
    max-width: 1024px;
    height: 100%;
    min-height: 75vh;
    margin: 100px auto 50px auto;
`;

const Routes = () => {

    return(
        <Router>
            <Header />
            <SideMenu />
            <Wrapper>
                <Switch>
                    <Route exact path="/search" component={Search} />
                    <Route exact path="/forget" component={Forget} />
                    <Route exact path="/mypost" component={MyPost} />
                    <Route exact path="/profile" component={Profile} />
                    <Route exact path="/login" component={LogIn} />
                    <Route exact path="/signup" component={SignUp} />
                    <Route exact path="/detail/:postId" component={Detail} />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/page=:i" component={Home} />
                    <Route exact path="/add" component={Add} />
                    <Route exact path="/modifyProfile" component={ModifyProfile} />
                    <Route exact path="/modifyPost/:postId" component={ModifyPost} />
                    <Route exact path="/profile/unresister" component={Unresister} />
                    <Route component={Page404}/>
                </Switch>
            </Wrapper>
            <Footer />
        </Router>
    );
}

export default Routes;
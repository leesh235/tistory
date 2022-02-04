import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { Header } from './Header/Header';
import { Footer } from './Footer';

import Home from '../pages/Home';
import Post from '../pages/Post';
import LogIn from '../pages/LogIn';
import Page404 from '../pages/Page404';

import Search from '../routers/Seach/index';
import Add from '../routers/Add/index';
import SignUp from '../routers/SignUp/index';
import Profile from '../routers/Profile/index';
import MyPost from '../routers/MyPost/index';
import Forget from '../routers/ForgetPass/index';
import ModifyProfile from '../routers/ModifyProfile/index';
import ModifyPost from '../routers/ModifyPost/index';
import Unresister from '../routers/Unresister/index';

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
            <Wrapper>
                <Switch>
                    <Route exact path="/search" component={Search} />
                    <Route exact path="/forget" component={Forget} />
                    <Route exact path="/mypost" component={MyPost} />
                    <Route exact path="/profile" component={Profile} />
                    <Route exact path="/login" component={LogIn} />
                    <Route exact path="/signup" component={SignUp} />
                    <Route exact path="/detail/:postId" component={Post} />
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
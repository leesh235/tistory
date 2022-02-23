import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { Header } from './Header/Header';
import { Footer } from './Footer';

import Home from '../pages/Home';
import Post from '../pages/Post';
import LogIn from '../pages/LogIn';
import Page404 from '../pages/Page404';
import WritePost from '../pages/WritePost';
import WriteCategory from '../pages/WriteCategory';
import WriteNotice from '../pages/WriteNotice';

import Add from '../routers/Add/index';
import Search from '../routers/Seach/index';
import SignUp from '../routers/SignUp/index';
import Profile from '../routers/Profile/index';
import ModifyProfile from '../routers/ModifyProfile/index';
import ModifyPost from '../routers/ModifyPost/index';
import Unresister from '../routers/Unresister/index';

const Wrapper = styled.main`
    width: 100vw;
    max-width: 1024px;
    min-height: calc(100vh - 170px);
    margin: 80px auto 0 auto;
    padding-top: 30px;
`;

const Routes = () => {

    return(
        <Router>
            <Header />
            <Wrapper>
                <Switch>
                    <Route exact path="/search" component={Search} />
                    <Route exact path="/profile" component={Profile} />
                    <Route exact path="/login" component={LogIn} />
                    <Route exact path="/signup" component={SignUp} />
                    <Route exact path="/detail/:postId" component={Post} />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/page=:i" component={Home} />
                    <Route exact path="/WritePost" component={WritePost} />
                    <Route exact path="/WriteCategory" component={WriteCategory} />
                    <Route exact path="/WriteNotice" component={WriteNotice} />
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
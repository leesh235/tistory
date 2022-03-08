import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { routes } from '../../routes';

import Home from '../../pages/Home';
import Post from '../../pages/Post';
import LogIn from '../../pages/LogIn';
import Page404 from '../../pages/Page404';
import WritePost from '../../pages/WritePost';
import WriteCategory from '../../pages/WriteCategory';
import WriteNotice from '../../pages/WriteNotice';
import Notice from '../../pages/Notice';
import Profile from '../../pages/Profile';
import ModifyProfile from '../../pages/ModifyProfile';
import ModifyPost from '../../pages/ModifyPost';
import ModifyNotice from '../../pages/ModifyNotice';

import SignUp from '../../routers/SignUp/index';
import Unresister from '../../routers/Unresister/index';

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
                    <Route exact path={`${routes.profile}`} component={Profile} />
                    <Route exact path={`${routes.login}`} component={LogIn} />
                    <Route exact path="/signup" component={SignUp} />
                    <Route exact path={`${routes.detail}:postId`} component={Post} />
                    <Route exact path={`${routes.home}`} component={Home} />
                    <Route exact path={`${routes.noticeList}`} component={Home} />
                    <Route exact path="/page=:i" component={Home} />
                    <Route exact path={`${routes.notice}:id`} component={Notice} />
                    <Route exact path={`${routes.writePost}`} component={WritePost} />
                    <Route exact path={`${routes.writeCategory}`} component={WriteCategory} />
                    <Route exact path={`${routes.writeNotice}`} component={WriteNotice} />
                    <Route exact path={`${routes.modifyProfile}`} component={ModifyProfile} />
                    <Route exact path={`${routes.modifyPost}:id`} component={ModifyPost} />
                    <Route exact path={`${routes.modifyNotice}:id`} component={ModifyNotice} />
                    <Route exact path="/profile/unresister" component={Unresister} />
                    <Route component={Page404}/>
                </Switch>
            </Wrapper>
            <Footer />
        </Router>
    );
}

export default Routes;
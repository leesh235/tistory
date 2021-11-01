import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import SearchIndex from '../Routes/Seach/index';
import HomeIndex from '../Routes/Home/index';
import DetailIndex from '../Routes/Detail/index'
import AddIndex from '../Routes/Add/index';
import LogInIndex from '../Routes/LogIn/index';
import SignUpIndex from '../Routes/SignUp/index';
import ProfileIndex from '../Routes/Profile/index';
import MyPostIndex from '../Routes/MyPost/index';
import ForgetIndex from '../Routes/ForgetPass/index';
import ModifyProfileIndex from '../Routes/ModifyProfile/index';
import ModifyPostIndex from '../Routes/ModifyPost/index';
import UnresisterIndex from '../Routes/Unresister/index';
import styled from 'styled-components';

import { useQuery } from '@apollo/client';
import { TOKENINFO } from "../apollo/tokenQuery";

const Wrapper = styled.main`
    width: 100%;
    max-width: 1180px;
    height: 100%;
    min-height: 70vh;
    margin: 100px auto 70px auto;
`;

const Routes = () => {

    const {data, loading} = useQuery(TOKENINFO);

    return(
        <Router>
            <Header />
            <Wrapper>
                <Switch>
                    <Route exact path="/search" component={SearchIndex} />
                    <Route exact path="/forget" component={ForgetIndex} />
                    <Route exact path="/mypost" component={MyPostIndex} />
                    <Route exact path="/profile" component={ProfileIndex} />
                    <Route exact path="/login" component={LogInIndex} />
                    <Route exact path="/signup" component={SignUpIndex} />
                    <Route exact path="/detail/:postId" component={DetailIndex} />
                    <Route exact path="/" component={HomeIndex} />
                    <Route exact path="/page=:i" component={HomeIndex} />
                    <Route exact path="/add" component={AddIndex} />
                    <Route exact path="/modifyProfile" component={ModifyProfileIndex} />
                    <Route exact path="/modifyPost/:postId" component={ModifyPostIndex} />
                    <Route exact path="/profile/unresister" component={UnresisterIndex} />
                </Switch>
            </Wrapper>
            <Footer />
        </Router>
    );
}

export default Routes;
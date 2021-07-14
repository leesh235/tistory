import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import SearchIndex from '../Routes/Seach/index';
import SearchList from '../Routes/Seach/SearchList';
import HomeIndex from '../Routes/Home/index';
import DetailIndex from '../Routes/Detail/index'
import AddIndex from '../Routes/Add/index';
import LogInIndex from '../Routes/LogIn/index';
import SignUpIndex from '../Routes/SignUp/index';
import ProfileIndex from '../Routes/Profile/index';
import MyPostIndex from '../Routes/MyPost/index';
import ForgetIndex from '../Routes/ForgetPass/index';
import ModifyProfileIndex from '../Routes/ModifyProfile/index';
import modifyPostIndex from '../Routes/ModifyPost/index';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin: 100px auto 100px auto;
    width: 1180px;
`;

const Routes = () => {
    return(
        <Router>
            <Header />
            <Wrapper>
                <Route exact path="/search" component={SearchIndex} />
                <Route exact path="/forget" component={ForgetIndex} />
                <Route exact path="/mypost" component={MyPostIndex} />
                <Route exact path="/profile" component={ProfileIndex} />
                <Route exact path="/login" component={LogInIndex} />
                <Route exact path="/signup" component={SignUpIndex} />
                <Route exact path="/result" component={SearchList} />
                <Route exact path="/detail/:postId" component={DetailIndex} />
                <Route exact path="/" component={HomeIndex} />
                <Route exact path="/page=:i" component={HomeIndex} />
                <Route exact path="/add" component={AddIndex} />
                <Route exact path="/modifyProfile" component={ModifyProfileIndex} />
                <Route exact path="/modifyPost/:postId" component={modifyPostIndex} />
            </Wrapper>
            <Footer />
        </Router>
    );
}

export default Routes;
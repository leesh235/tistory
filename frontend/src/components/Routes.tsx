import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import Search from '../Routes/Seach/index';
import Home from '../Routes/Home/index';
import Detail from '../Routes/Detail/index'
import Add from '../Routes/Add/index';
import LogIn from '../Routes/LogIn/index';
import SignUp from '../Routes/SignUp/index';
import Profile from '../Routes/Profile/index';
import MyPost from '../Routes/MyPost/index';
import Forget from '../Routes/ForgetPass/index';
import ModifyProfile from '../Routes/ModifyProfile/index';
import ModifyPost from '../Routes/ModifyPost/index';
import Unresister from '../Routes/Unresister/index';
import { Page404 } from './Page404';
import styled from 'styled-components';

const Wrapper = styled.main`
    width: 100%;
    max-width: 1180px;
    height: 100%;
    min-height: 70vh;
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
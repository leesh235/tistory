import styled from 'styled-components';
import { ProfileContainer } from '../containers/ProfileContainer';

const Wrapper = styled.main`
    display: flex;
    flex-direction: row;
    width: 100%;
`;

const Profile = () => {
    return(
        <Wrapper>
            <ProfileContainer />
        </Wrapper>
    );
}

export default Profile;
import styled from 'styled-components';

const Wrapper = styled.main`
    position: fixed;
    left: -1px;
    top: 100px;
    border: 1px solid black;
    border-radius: 0 10px 10px 0;
    height: 150px;
    width: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
`;

const SideMenu = () => {

    return(
        <Wrapper>
            <div>g</div>
            <div>g</div>
        </Wrapper>
    );
}

export default SideMenu;
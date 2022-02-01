import styled from "styled-components";

const Wrapper = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const LogInPresenter = () => {
    return (
        <Wrapper>
            <div>github로 로그인</div>
            <div>google로 로그인</div>
        </Wrapper>
    );
}
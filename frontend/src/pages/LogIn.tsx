import styled from "styled-components";

const Wrapper = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const LogIn = () => {
    return (
        <Wrapper>
            <div>github로 로그인</div>
            <div>google로 로그인</div>
            <div>----------또는----------</div>
            <div>github로 회원가입</div>
            <div>google로 회원가입</div>
        </Wrapper>
    );
}
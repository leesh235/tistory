import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Text } from "../../components/common/Text";
import { Button } from "../../components/common/Button";
import { Img } from "../../components/Img";

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 150px 0 0 0;
    width: 100%;
`;

const Contents = styled.article`
    width: 70%;
    min-height: 40rem;
    display: flex;
    flex-direction: column;
    padding: 30px;
    border-radius: 15px;
    border: solid 1px gray;
`;

const BtnWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 75%;
    margin: 30px 0 90px 0;
    >:nth-child(1){
        margin-right: 15px;
    }
`;

const ImgWrapper = styled.div`
    width: 150px;
    height: 150px;
`;

interface User{
    nickName: string,
    email: string,
    userRole: string,
}

interface Porps{
    userImgUrl: string,
    userInfo: User,
}

export const ProfilePresenter = ({userImgUrl, userInfo}: Porps) => {
    return (
        <Wrapper>
            <Contents>
                <ImgWrapper>
                    {userImgUrl && <Img img={userImgUrl} />}
                </ImgWrapper>
                <Text text={`닉네임: ${userInfo.nickName}`}/>
                <Text text={`email: ${userInfo.email}`}/>
                <Text text={`등급: ${userInfo.userRole}`}/>
            </Contents>
            
            <BtnWrapper>
                <Link to={{
                    pathname: "/modifyProfile",
                    state: {
                        email: userInfo.email
                    }
                }}>
                    <Button text={"수정"} fs={"1.5rem"} color={"skyblue"} width={"9rem"} height={"3rem"}/>
                </Link>
            
                <Link to={{
                        pathname: "/profile/unresister",
                        state: {
                            userInfo: userInfo
                        }
                    }}>
                        <Button text={"회원탈퇴"} fs={"1.5rem"} color={"pink"} width={"9rem"} height={"3rem"}/>
                </Link>
            </BtnWrapper>
        </Wrapper>
    );
}
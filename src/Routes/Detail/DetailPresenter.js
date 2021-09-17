import React, { useEffect } from 'react';
import styled from 'styled-components'
import moment from "moment";
import { Link } from 'react-router-dom';
import { LineStyle } from "../../components/LineStyle";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Gap } from "../../components/Gap";

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
`;

const MainContent = styled.article`
    display: flex;
    flex-direction: column;
    width: auto;
    height: auto;
    align-items: center;
    margin: 200px 0px;
`;

const TitleStyle = styled.h2`

`;

const DateStyle = styled.div`

`;

const UserNameStyle = styled.div`

`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 800px;
    min-height: 100px;
    margin: 50px 0px;
    >:nth-child(n){
        margin-bottom: 50px;
    }
`;

const ImageStyle = styled.div`
    width: auto;
    height: auto;
`;


const PostBtn = styled.div`
    cursor: pointer;
`;

const BtnStyle = {
    w: "800px",
    display: "flex",
    fd: "row-reverse",
}

const ContentInfo = {
    display: "flex",
    fd: "row-reverse"
}

const DetailPresenter = ({postContents, post, equal, onClick}) => {

    const createMarkup = () => {
        return {__html: `${postContents}`};
    }

    useEffect(() => {

    },[postContents])

    return(
        <Wrapper>
            <MainContent>
                <FlexWrapper>
                    <TitleStyle>{post.title}</TitleStyle>
                    
                    <Gap h={"10px"}/>

                    <LineStyle w={"800px"}/>

                    <Gap h={"10px"}/>

                    <FlexWrapper props={ContentInfo}>
                        <DateStyle>{`작성일: ${moment(post.createdAt).format("YYYY-MM-DD LT")}`}</DateStyle>
                        <Gap w={"10px"}/>
                        <UserNameStyle>{`작성자: ${post.writer}`}</UserNameStyle>
                    </FlexWrapper>
                </FlexWrapper>

                <ContentWrapper>
                    {postContents && <div dangerouslySetInnerHTML={createMarkup()} />}
                </ContentWrapper>

                <FlexWrapper props={BtnStyle}>
                    {equal ? <PostBtn onClick={onClick}>삭제</PostBtn> : ""}
                    <Gap w={"30px"}/>
                    {equal ? 
                        <Link to={{
                            pathname: `/modifyPost/${post.postId}`,
                            state:{
                                title: post.title,
                                postId: post.postId
                            }
                        }}>
                            <PostBtn>수정</PostBtn>
                        </Link> :
                        ""
                    }
                </FlexWrapper>
            </MainContent>
        </Wrapper>
    );
}

export default DetailPresenter;
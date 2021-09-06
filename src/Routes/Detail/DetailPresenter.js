import React, { useEffect } from 'react';
import styled from 'styled-components'
import moment from "moment";
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;
    height: auto;
    align-items: center;
    margin: 200px 0px;
`;

const Top = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 900px;
`;

const LineStyle = styled.div`
    width: 100%;
    border-bottom: 1px solid gray;
    margin: 12px 0px;
`;

const TitleStyle = styled.h2`

`;

const ContentInfo = styled.div`
    display: flex;
    flex-direction: row-reverse;
    >:nth-child(n){
        margin-left: 12px;
    }
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

const BtnWrapper = styled.div`
    width: 800px;
    display: flex;
    flex-direction: row-reverse;
    a{
        text-decoration: none;
        color: inherit;
    }
    >:nth-child(n){
        margin-left: 30px;
    }
`;

const PostBtn = styled.div`
    cursor: pointer;
`;

const DetailPresenter = ({postContents, post, equal, onClick}) => {

    const createMarkup = () => {
        return {__html: `${postContents}`};
    }

    useEffect(() => {

    },[postContents])

    return(
        <Wrapper>
            <Top>
  
                <TitleStyle>{post.title}</TitleStyle>

                <LineStyle></LineStyle>

                <ContentInfo>
                    <DateStyle>{`작성일: ${moment(post.createdAt).format("YYYY-MM-DD LT")}`}</DateStyle>
                    <UserNameStyle>{`작성자: ${post.writer}`}</UserNameStyle>
                </ContentInfo>


            </Top>

            <ContentWrapper>
                {postContents && <div dangerouslySetInnerHTML={createMarkup()} />}
            </ContentWrapper>

            <BtnWrapper>
                {equal ? <PostBtn onClick={onClick}>삭제</PostBtn> : ""}
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
            </BtnWrapper>
        </Wrapper>
    );
}

export default DetailPresenter;
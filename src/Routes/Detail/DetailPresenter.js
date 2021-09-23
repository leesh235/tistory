import React, { useEffect } from 'react';
import styled from 'styled-components'
import moment from "moment";
import { Link } from 'react-router-dom';
import { LineStyle } from "../../components/LineStyle";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Gap } from "../../components/Gap";
import { Text } from "../../components/Text";

const MainContent = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    align-items: center;
    margin: 200px 0px;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    min-height: 350px;
    margin: 50px 0px;
    >:nth-child(n){
        margin-bottom: 50px;
    }
`;

const PostBtn = styled.div`
    cursor: pointer;
`;

const BtnStyle = {
    w: "90%",
    display: "flex",
    fd: "row",
    jc: "flex-end"
}

const TitleInfo = {
    display: "flex",
    fd: "column",
    w: "90%",
}

const ContentInfo = {
    display: "flex",
    fd: "row",
    jc: "flex-end"
}

const DetailPresenter = ({postContents, post, equal, onClick}) => {

    const createMarkup = () => {
        return {__html: `${postContents}`};
    }

    useEffect(() => {

    },[postContents])

    return(
        <MainContent>
            <FlexWrapper props={TitleInfo}>
       
                <Text text={`${post.title}`} type={"div"}/>

                <LineStyle w={"100%"} margin={"10px 0 10px 0"}/>

                <FlexWrapper props={ContentInfo}>
                    <Text text={`작성자: ${post.writer}`} margin={"0 10px 0 0"}/>
                    <Text text={`작성일: ${moment(post.createdAt).format("YYYY-MM-DD")}`}/>
                </FlexWrapper>
            </FlexWrapper>

            <ContentWrapper>
                {postContents && <div dangerouslySetInnerHTML={createMarkup()} />}
            </ContentWrapper>

            <FlexWrapper props={BtnStyle}>
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
                <Gap w={"30px"}/>
                {equal ? <PostBtn onClick={onClick}>삭제</PostBtn> : ""}
            </FlexWrapper>
        </MainContent>
    );
}

export default DetailPresenter;
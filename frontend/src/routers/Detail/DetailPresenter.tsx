import React, { useEffect } from 'react';
import styled from 'styled-components'
import moment from "moment";
import { Link } from 'react-router-dom';
import { LineStyle } from "../../components/LineStyle";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Text } from "../../components/common/Text";
import { Button } from "../../components/common/Button";

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

interface Post {
    writer: string,
    title: string,
    postId: number,
    createdAt: string,
}

interface Props {
    equal: boolean,
    onClick: () => void,
    postContents: any
    post: Post
}

export const DetailPresenter = ({postContents, post, equal, onClick}: Props) => {

    const createMarkup = () => {
        return {__html: `${postContents}`};
    }

    useEffect(() => {

    },[postContents])

    return(
        <MainContent>
            <FlexWrapper display={"flex"} fd={"column"} w={"90%"}>
       
                <Text text={`${post.title}`} type={"div"}/>

                <LineStyle w={"100%"} margin={"10px 0 10px 0"}/>

                <FlexWrapper display={"flex"} fd={"row"} jc={"flex-end"}>
                    <Text text={`작성자: ${post.writer}`} margin={"0 10px 0 0"}/>
                    <Text text={`작성일: ${moment(post.createdAt).format("YYYY-MM-DD")}`}/>
                </FlexWrapper>
            </FlexWrapper>

            <ContentWrapper>
                {postContents && <div dangerouslySetInnerHTML={createMarkup()} />}
            </ContentWrapper>

            <FlexWrapper display={"flex"} fd={"row"} jc={"flex-end"} w={"90%"}>
                {equal ? 
                    <Link to={{
                        pathname: `/modifyPost/${post.postId}`,
                    }}>
                        <Button text={"수정"} fs={"1.5rem"} color={"skyblue"} width={"9rem"} height={"3rem"}/>
                    </Link> :
                    ""
                }
                {equal ? <Button text={"삭제"} fs={"1.5rem"} color={"pink"} width={"9rem"} height={"3rem"} onClick={onClick} /> : ""}
            </FlexWrapper>
        </MainContent>
    );
}
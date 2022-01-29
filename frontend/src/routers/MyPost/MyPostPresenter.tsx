import React from "react";
import styled from "styled-components";
import { Contents } from '../../components/Contents';
import { Text } from '../../components/Text';

const Wrapper = styled.section`
    padding: 2em;
    min-height: 500px;
`;


interface Post{
    postId?: number,
    title?: string,
    createAt?: string,
    author?: string,
}

interface Props extends Post{
    myposts: Array<Post>,
}

export const MyPostPresenter = ({myposts}: Props) => {
    return (
        <Wrapper>
            <Text text={"나의 게시물"}/>
            {myposts.length !== 0 ? 
                myposts.map((mypost, index) => {
                    return <Contents
                        key={index}
                        postId={mypost.postId}
                        title={mypost.title}
                        createAt={mypost.createAt}
                        author={mypost.author}
                    />
                })
            : 
                <Text text={"게시글이 없습니다"}/>
            }
        </Wrapper>
    );
}
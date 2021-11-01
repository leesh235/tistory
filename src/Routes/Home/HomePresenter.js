import React from 'react';
import styled from 'styled-components';
import {Contents} from '../../components/Contents';
import { Text } from '../../components/Text';

const Wrapper = styled.section`
    padding: 2em;
    min-height: 500px;
`;

const HomePresenter = ({ postList }) => {
    return(
        <Wrapper>
            {postList.length !== 0 ? 
                postList.map((post, index) => {
                    return <Contents
                        key={index}
                        postId={post.postId}
                        title={post.title}
                        createdAt={post.createdAt}
                        writer={post.writer}
                    />
                })
            : 
                <Text text={"게시글이 없습니다"}/>
            }
        </Wrapper>
    );
}

export default HomePresenter;
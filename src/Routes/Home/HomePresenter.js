import React from 'react';
import styled from 'styled-components';
import {Contents} from '../../components/Contents';

const Wrapper = styled.section`
    padding: 2em;
    min-height: 500px;
`;

const HomePresenter = ({ postList }) => {

    return(//현재
        <Wrapper>
            {postList.map((post, index) => {
                return <Contents
                    key={index}
                    postId={post.postId}
                    title={post.title}
                    createdAt={post.createdAt}
                    writer={post.writer}
                />
            })}
        </Wrapper>
    );
}

export default HomePresenter;
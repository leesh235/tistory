import React from 'react';
import styled from 'styled-components';
import Contents from '../../components/Contents';

const BodyStyle = styled.section`
    padding: 2em;
`;

const HomePresenter = ({ postList }) => {

    return(//현재
        <BodyStyle>
            {postList.map((post, index) => {
                return <Contents
                    key={index}
                    postId={post.postId}
                    title={post.title}
                    createdAt={post.createdAt}
                    writer={post.writer}
                />
            })}
        </BodyStyle>
    );
}

export default HomePresenter;
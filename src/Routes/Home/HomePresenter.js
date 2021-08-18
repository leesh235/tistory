import React from 'react';
import styled from 'styled-components';
import Pages from "../Pages/Pages"
import Contents from '../../components/Contents';

const BodyStyle = styled.main`
    width: auto;
    height: auto;
    margin: 30px 100px 50px 100px;
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
            {/* <Pages getDate={(index) => {
                setPageId(index)
            }} pageNum={len}/> */}
        </BodyStyle>
    );
}

export default HomePresenter;
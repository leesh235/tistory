import React,{useState} from 'react';
import styled from 'styled-components';
import Pages from "../Pages/Pages"
import Contents from '../../components/Contents';

const BodyStyle = styled.main`
    width: auto;
    height: auto;
    margin: 30px 100px 50px 100px;
`;

const HomePresenter = ({ allPosts }) => {

    return(//현재
        <BodyStyle>
            {allPosts.map((post) => {
                return <Contents
                    postId={post.postId}
                    title={post.title}
                    createdAt={post.createdAt}
                    id={post.id}
                />
            })}
            {/* <Pages getDate={(index) => {
                setPageId(index)
            }} pageNum={len}/> */}
        </BodyStyle>
    );
}

export default HomePresenter;
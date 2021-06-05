import React from "react";
import styled from "styled-components";
import Contents from '../../components/Contents';

const BodyStyle = styled.main`
    width: auto;
    height: auto;
    margin: 30px 100px 50px 100px;
`;

const MyPostPresenter = ({myposts}) => {
    return (
        <BodyStyle>
            {myposts.map((mypost, index) => {
                return <Contents
                    key={index}
                    postId={mypost.postId}
                    title={mypost.title}
                    createdAt={mypost.createdAt}
                    id={mypost.id}
                />
            })}
            {/* <Pages getDate={(index) => {
                setPageId(index)
            }} pageNum={len}/> */}
        </BodyStyle>
    );
}

export default MyPostPresenter;
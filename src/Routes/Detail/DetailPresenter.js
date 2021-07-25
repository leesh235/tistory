import React from 'react';
import styled from 'styled-components'
import moment from "moment";
import { Link } from 'react-router-dom';

const Mcontents = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;
    height: auto;
    align-items: center;
    margin: 30px 100px 50px 100px;
`;

const HeaderSize = styled.div`
    width:1000px;
    height: 200px;
    margin-top:100px;
    margin-bottom:100px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    border-radius: 10px;
`;

const HeaderStyle = styled.div`
    width: 100%;
    max-width: 700px;
    display: flex;
    flex-direction: row;
`;

const Mdiv = styled.div`
    display: flex;
    flex-direction: column;
    margin: 30px 0px 10px 50px;
`;

const DateStyle = styled.div`
    color: red;
    justify-content:center
`;

const TitleStyle = styled.h1`
    margin-left: 50px;
    margin-bottom: 10px;
`;


const UserNameStyle = styled.h4`
    margin-left: 60px;
    margin-bottom: 60px;
    color: red;
`;

const ContentsStyle = styled.div`
    width: 1200px;
    height: auto;
    font-size:22px;
`;

const PostBtn = styled.button`

`;

const DetailPresenter = ({post, postId, equal}) => {

    return(
        <Mcontents>
            <HeaderSize>
                <HeaderStyle>
                    <Mdiv>
                        <TitleStyle>{post.title}</TitleStyle>
                        <UserNameStyle>{post.id}</UserNameStyle>
                    </Mdiv>
                    <DateStyle>{moment(post.createdAt).format("YYYY-MM-DD / LT")}</DateStyle>
                </HeaderStyle>
            </HeaderSize>
            <ContentsStyle>{post.contents}</ContentsStyle>
            {equal ? 
                <Link to={{
                    pathname: `/modifyPost/${postId}`,
                    state:{
                        title: post.title,
                        contents: post.contents
                    }
                }}>
                    <PostBtn>수정</PostBtn>
                </Link> :
                ""
            }
        </Mcontents>
    );
}

export default DetailPresenter;
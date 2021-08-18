import React from "react";
import styled from 'styled-components';
import moment from "moment"
import { Link } from 'react-router-dom';

const TextDiv = styled.div`
    a{
        text-decoration: none;
        color: inherit;
    }
`;

const AllPostsStyle = styled.div`
    display: flex;
    flex-direction: row;
    padding: 20px;
    border-bottom: 1px solid gray;
`;

const PostData = styled.div`
    display: flex;
    flex-direction: column;
`;

const TitleStyle = styled.h4`
    margin: 0;
    margin-bottom: 15px;
    margin-left: 20px;
`;

const UserStyle = styled.div`
    margin: 0;
    margin-bottom: 15px;
    margin-left: 20px;
`;

const DateStyle = styled.div`
    margin: 0;
    margin-bottom: 15px;
    margin-left: 20px;
`;

function Contents({writer, title, postId, createdAt }){
    return(
        <TextDiv>
            <Link to={{
                pathname: `/detail/${postId}`,
                state:{
                    writer
                }
            }}>
                <AllPostsStyle key={postId}>
                    <PostData>
                        <TitleStyle>{title}</TitleStyle>
                        <UserStyle>{writer}</UserStyle>
                        <DateStyle>{moment(createdAt).format("YYYY-MM-DD / LT")}</DateStyle>
                    </PostData>
                </AllPostsStyle>
            </Link>
        </TextDiv>
    );
}

export default Contents
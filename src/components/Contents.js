import React from "react";
import styled from 'styled-components';
import moment from "moment"
import { Link } from 'react-router-dom';
import { Text } from "../components/Text";

const Wrapper = styled.article`
    padding: 20px;
    border-bottom: 1px solid gray;
`;

const TitleStyle = `
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 15px;
`;

const UserStyle = `
    font-size: 16px;
    font-weight: normal;
    margin-bottom: 15px;
`;

const DateStyle = `
    font-size: 16px;
    font-weight: normal;
    margin-bottom: 15px;
`;

function Contents({writer, title, postId, createdAt }){
    return(
        <Wrapper key={postId}>
            <Link to={{
                pathname: `/detail/${postId}`,
                state:{
                    writer
                }
            }}>
                <Text text={title} props={TitleStyle} />
                <Text text={writer} props={UserStyle} />
                <Text text={moment(createdAt).format("YYYY-MM-DD / LT")} props={DateStyle} />
            </Link>
        </Wrapper>
    );
}

export default Contents
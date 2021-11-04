import React from "react";
import styled from 'styled-components';
import moment from "moment"
import { Link } from 'react-router-dom';
import { Text } from "./Text";

const Wrapper = styled.article<StyleProps>`
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

interface StyleProps {
    writer?: string,
    title?: string,
    postId?: string,
    createdAt?: string,
}

interface Props extends StyleProps{

}

export const Contents = ({writer, title, postId, createdAt }: Props) => {
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

Contents.defaultProps = {

}
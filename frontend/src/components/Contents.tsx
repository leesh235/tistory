import styled from 'styled-components';
import moment from "moment"
import { Link } from 'react-router-dom';
import { Text } from "./Text";

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

interface Props {
    author?: string,
    title?: string,
    postId?: number,
    createAt?: string,
    hits?: number,
    thumbnail?: string,
}

export const Contents = ({author, title, postId, createAt, hits, thumbnail }: Props) => {
    return(
        <Wrapper key={postId}>
            <Link to={{
                pathname: `/detail/${postId}`,
                state:{
                    author
                }
            }}>
                <Text text={title} props={TitleStyle} />
                <Text text={author} props={UserStyle} />
                <Text text={moment(createAt).format("YYYY-MM-DD / LT")} props={DateStyle} />
            </Link>
        </Wrapper>
    );
}
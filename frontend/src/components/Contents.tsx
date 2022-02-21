import styled from 'styled-components';
import moment from "moment"
import { Link } from 'react-router-dom';
import { Text } from "./Text";

const Wrapper = styled.article`
    width: calc(100% - 60px);
    padding: 20px 30px;
    border-bottom: 1px solid gray;
`;

const FlexWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 10px 0 0 0;
    >:nth-child(2){
        margin-right: 30px;
    }
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
                <h3>{title}</h3>
                <FlexWrapper>
                    <Text text={moment(createAt).format("YYYY.MM.DD. HH:MM")} fs={"1.4rem"}/>
                    <Text text={`${hits}`} fs={"1.4rem"}/>
                </FlexWrapper>
            </Link>
        </Wrapper>
    );
}
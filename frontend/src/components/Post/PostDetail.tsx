import styled from 'styled-components'
import moment from "moment";
import { Link } from 'react-router-dom';
import { LineStyle } from "../../components/LineStyle";
import { Text } from "../common/Text";
import { Button } from "../common/Button";

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    align-items: center;
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

const TopWrapper = styled.article`
    width: 95%;
    height: auto;
    margin: 20px 0 0 0;
`;

const ContentWrapper = styled.article`
    display: flex;
    flex-direction: column;
    width: 95%;
    height: auto;
    >:nth-child(n){
        margin-bottom: 50px;
    }
`;

interface Post {
    id: number,
    title: string,
    contentsUrl: string,
    author: string,
    createAt: string,
    hits: number,
    category: string,
}

interface Props {
    equal: boolean,
    onClick: () => void,
    postContents: any
    post: Post
}

export const PostDetail = ({post, onClick}: Props) => {

    const createMarkup = () => {
        return {__html: `${post.contentsUrl}`};
    }

    return(
        <Wrapper>
            
            <TopWrapper>
                <h2>{post.title}</h2>
                <FlexWrapper>
                    <Text text={`${post.category}`} fc={"#3db39e"}/>
                    <Text text={`Leesh | ${moment(post.createAt).format("YYYY-MM-DD")}`} fs={"1.3rem"} fc={"gray"}/>
                </FlexWrapper>
            </TopWrapper>

            <LineStyle w={"98%"} margin={"20px 0"}/>

            <ContentWrapper>
                <div dangerouslySetInnerHTML={createMarkup()} />
            </ContentWrapper>

            {/* <FlexWrapper display={"flex"} fd={"row"} jc={"flex-end"} w={"90%"}>
                {equal ? 
                    <Link to={{
                        pathname: `/modifyPost/${post.postId}`,
                    }}>
                        <Button text={"수정"} fs={"1.5rem"} color={"skyblue"} w={"9rem"} h={"3rem"}/>
                    </Link> :
                    ""
                }
                {equal ? <Button text={"삭제"} fs={"1.5rem"} color={"pink"} w={"9rem"} h={"3rem"} onClick={onClick} margin={"0 0 0 30px"}/> : ""}
            </FlexWrapper> */}
        </Wrapper>
    );
}
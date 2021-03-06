import styled from 'styled-components'
import moment from "moment";
import { LineStyle } from "../common/LineStyle";
import { Text } from "../common/Text";
import { Button } from "../common/Button";
import { LinkButton } from "../common/LinkButton";
import { useSelector } from 'react-redux';
import { routes } from '../../routes';
import { Viewer } from '../View/Viewer';

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

const ButtonWrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    @media screen and (min-width: 64em){
        width: 100%;
    }
    @media screen and (max-width: 63.94em){
        width: 90%;
        >:nth-child(n){
            margin: 0 5px;
        }
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
    onClick: () => void,
    post: Post,
}

export const PostDetail = ({post, onClick}: Props) => {

    const store_role = useSelector((state: any) => state?.user?.role);

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

            <Viewer contentsUrl={post.contentsUrl} />

            {store_role === "ADMIN" ? 
            <ButtonWrapper>
                <LinkButton text={"??????"} width={"40%"} pathname={`${routes.modifyPost}${post.id}`}/>
                <Button text={"??????"} width={"40%"} type={"button"} onClick={onClick}/>
            </ButtonWrapper>
            :
            ""}

        </Wrapper>
    );
}
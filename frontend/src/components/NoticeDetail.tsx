import styled from 'styled-components';
import { useSelector } from 'react-redux';
import moment from "moment";
import { Text } from "./common/Text";
import { Button } from "./common/Button";
import { LinkButton } from "./common/LinkButton";
import { LineStyle } from "./LineStyle";
import { routes } from '../routes';

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    align-items: center;
`;

const TopWrapper = styled.article`
    width: 95%;
    height: auto;
    margin: 20px 0 0 0;
`;

const ContentWrapper = styled.article`
    display: flex;
    justify-content: center;
    width: 95%;
    height: auto;
    min-height: 400px;
    margin-bottom: 50px;
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

interface Props {
    id: number,
    title: string,
    contents: string,
    createAt: string,
    onClick: () => void,
}

export const NoticeDetail = ({ id, title, contents, createAt, onClick }: Props) => {

    const store_role = useSelector((state: any) => state?.user?.role);

    return(
        <Wrapper>
            <TopWrapper>
                <Text text={`Leesh | ${moment(createAt).format("YYYY-MM-DD")}`} fs={"1.3rem"} fc={"gray"}/>
                <h2>{title}</h2>
            </TopWrapper>

            <LineStyle w={"98%"} margin={"20px 0"}/>

            <ContentWrapper>
                <Text text={`${contents}`} fc={"black"}/>
            </ContentWrapper>

            {store_role === "ADMIN" ? 
            <ButtonWrapper>
                <LinkButton text={"수정"} width={"40%"} pathname={`${routes.modifyNotice}${id}`}/>
                <Button text={"삭제"} width={"40%"} type={"button"} onClick={onClick}/>
            </ButtonWrapper>
            :
            ""}

        </Wrapper>
    );
}
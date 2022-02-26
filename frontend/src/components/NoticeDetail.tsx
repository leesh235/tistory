import styled from 'styled-components';
import { PC, Tablet, Mobile } from '../utils/responsive';
import moment from "moment";
import { Text } from "./common/Text";
import { LineStyle } from "./LineStyle";

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
    flex-direction: column;
    width: 95%;
    height: auto;
    >:nth-child(n){
        margin-bottom: 50px;
    }
`;

interface Props {
    title: string,
    contents: string,
    createAt: string,
}

export const NoticeDetail = ({ title, contents, createAt }: Props) => {
    return(
        <Wrapper>
            <TopWrapper>
                <Text text={`Leesh | ${moment(createAt).format("YYYY-MM-DD")}`} fs={"1.3rem"} fc={"gray"}/>
                <h2>{title}</h2>
            </TopWrapper>

            <LineStyle w={"98%"} margin={"20px 0"}/>

            <Text text={`${contents}`} fc={"black"}/>
        </Wrapper>
    );
}
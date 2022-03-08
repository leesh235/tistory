import styled from 'styled-components';
import { PC, Tablet, Mobile } from '../../utils/responsive';
import { Link } from 'react-router-dom';
import { routes } from '../../routes';
import { Text } from '../common/Text';
import moment from "moment";

const Wrapper = styled.section`
    @media screen and (min-width: 64em){
        width: 100%;
    }

    @media screen and (max-width: 63.94em) and (min-width: 22.5em){
        width: 95%;
    }

    @media screen and (max-width: 22.44em){
        width: 98%;
    }
`;

const ContentsWrapper = styled.article`
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
`;

interface Notice{
    id?: number,
    title?: string,
    createAt?: string,
    contents?: string,
}

interface Props extends Notice{
    noticeList: Array<Notice>,
    noticeQuantity: number
}

export const NoticeList = ({ noticeList, noticeQuantity = 0 }: Props) => {
    return(
        <Wrapper>
            {
                noticeQuantity !== 0 ?
                noticeList?.map((val, idx) => {
                    return(
                        <ContentsWrapper key={idx}>
                            <Link to={{
                                pathname: `${routes.notice}${val.id}`
                            }}>
                                <h3>{val.title}</h3>
                                <FlexWrapper>
                                    <Text text={moment(val.createAt).format("YYYY.MM.DD. HH:MM")} fs={"1.4rem"}/>
                                </FlexWrapper>
                            </Link>
                        </ContentsWrapper>
                    );
                })
                :
                <Text text={"공지사항이 없습니다"}/>
            }
        </Wrapper>
    );
}
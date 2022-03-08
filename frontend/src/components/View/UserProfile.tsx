import styled from 'styled-components';
import moment from "moment";
import { Text } from '../common/Text';
import { Img } from '../common/Img';

const Wrapper = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid gray;
    border-radius: 9px;
    padding: 20px 0;

    @media screen and (min-width: 64em){
        flex-direction: row;
        width: 100%;
        min-height: 500px;
        >:nth-child(n){
            margin: 0 20px;
        }
    }
    @media screen and (max-width: 63.94em){
        flex-direction: column;
        width: 90%;
        >:nth-child(n){
            margin: 20px 0;
        }
    }

`;

const FlexWrapper = styled.article`
    display: flex;
    flex-direction: column;
    >:nth-child(n){
        margin: 5px 0;
    }
`;

const ImageWrapper = styled.article`
    width: 150px;
    height: 150px;
    border: 1px solid black;
`;

interface Props {
    email: string,
    nickName: string,
    createAt: string,
    role: string,
    imageUrl?: string,
}

export const UserProfile = ({ email, nickName, createAt, role, imageUrl } : Props) => {
    return(
        <Wrapper>
            <ImageWrapper>
                imageUrl
            </ImageWrapper>
            <FlexWrapper>
                <Text text={`${email}`} fs={"1.6rem"} fc={"black"}/>
                <Text text={`${nickName}`} fs={"1.6rem"} fc={"black"}/>
                <Text text={`${moment(createAt).format("YYYY-MM-DD")}`} fs={"1.6rem"} fc={"black"}/>
                <Text text={`${role}`} fs={"1.6rem"} fc={"black"}/>
            </FlexWrapper>
        </Wrapper>
    );
}
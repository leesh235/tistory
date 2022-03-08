import styled from "styled-components";
import { Text } from '../common/Text';
import moment from "moment";

const Wrapper = styled.li`
    width: 95%;
    height: auto;
    min-height: 71px;
    border-top: 1px solid gray;
    margin-bottom: 10px;

    display: grid;
    grid-template-rows: repeat(3, minmax(16px, auto));
    grid-template-columns: 1fr 10fr 1fr;
    align-items: end;

    >:nth-child(1) { grid-column: 1 / 4; grid-row: 2 / 3 ;}
    >:nth-child(2) { grid-column: 2 / 3; grid-row: 1 / 2 ;}
    >:nth-child(3) { grid-column: 1 / 2; grid-row: 1 / 2 ;}
    >:nth-child(4) { grid-column: 3 / 4; grid-row: 3 / 4 ;} 
`;

const FlexWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const Button = styled.span`
    width: auto;
    &:hover{
        color: red;
    }
    cursor: pointer;
`;

interface Porps {
    commentId: number,
    writer: string,
    comment: string,
    createAt: string,
    handleModifyComment: (id: number) => void,
    handleDeleteComment: (id: number) => void,
}

export const Comment = ({ commentId, writer, comment, createAt, handleModifyComment, handleDeleteComment }: Porps) => {
    if(writer){
        return(
            <Wrapper>
                <Text text={comment}/>
                <Text text={`${moment(createAt).format("MM/DD HH:MM")}`} fs={"1.3rem"} fc={"gray"}/>
                <Text text={writer}/>
                <FlexWrapper>
                    <Button onClick={() => handleModifyComment(commentId)}>수정</Button>
                    <Button onClick={() => handleDeleteComment(commentId)}>삭제</Button>
                </FlexWrapper>
            </Wrapper>
        );
    }else{
        return(
            <Wrapper>
                <Text text={comment}/>
            </Wrapper>
        );
    }
}
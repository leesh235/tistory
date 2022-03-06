import styled from "styled-components";
import { Textarea } from "../common/Textarea";
import { Button } from "../common/Button";

const Wrapper = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 95%;
    height: 80px;
    margin-bottom: 15px;
    >:nth-child(n+2){
        margin-left: 10px;
    }
`;

interface Porps {
    handleWriteComment?: () => void,
    register?: any,
    handleSubmit?: any,
}

export const CommentForm = ({ register, handleSubmit, handleWriteComment, }: Porps) => {
    return(
        <Wrapper onSubmit={handleSubmit(handleWriteComment)}>
            <Textarea register={register("comment",{ required: true, })}/>
            <Button type={"submit"} text={"작성"} height={"100%"} maxW={"100px"} width={"15%"}/>
        </Wrapper>
    );
}
import React from "react";
import styled from "styled-components";
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { FlexWrapper } from "../../components/FlexWrapper";

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 150px 0 0 0;
`;

const Box = styled.div`
    width: 80%;
`;

const ButtonStyle = {
    display: "flex",
    jc: "flex-end",
    w: "80%"
}

export default ({ title, onSubmit, editorRef }) => {
    return (
        <Wrapper>
            <Input w={"80%"} h={"30px"} margin={"0 0 20px 0"} placeholder={"  제목"} func={title}/>
            <Box>
                <Editor
                    previewStyle="vertical"
                    height="600px"
                    initialEditType="wysiwyg"
                    ref={editorRef}
                />
            </Box>

            <FlexWrapper props={ButtonStyle}>
                <Button text={"완료"} onClick={onSubmit} w={"7rem"} h={"4rem"} m={"30px 0 90px 0"}/>
            </FlexWrapper>
        </Wrapper>
    );
}
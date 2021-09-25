import React from "react";
import styled from "styled-components";
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

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

const SubmitIn = styled.div`
    width: 60px;
    height: 60px;
`;

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
            <SubmitIn onClick={onSubmit}>완료</SubmitIn>
        </Wrapper>
    );
}
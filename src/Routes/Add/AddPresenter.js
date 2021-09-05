import React from 'react';
import styled from 'styled-components';

// import {Editor} from "../../components/Editor";

import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

const BodyStyle = styled.div`
    width: auto;
    height: 400px;
    margin: 30px 100px 50px 100px;
`;

const BoxStyle = styled.div`
    height: 400px;
    width: 500px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    border-radius: 10px;
`;

const ContentStyle = styled.div`
    display: flex;
    flex-direction: column;
`;

const TitleIn = styled.input`
    height: 30px;
    width: 80%;
    margin-bottom: 20px;
`;

const SummaryIn = styled.textarea`
    height: 30px;
    width: 80%;
    margin-bottom: 20px;
`;

const ImgIn = styled.input`
    margin-bottom: 20px;
`;

const SubmitIn = styled.button`
    width: 60px;
    height: 60px;
`;


const AddPresenter = ({title, onSubmit, setPostData, editorRef}) => {
  
    return (
        //ckeditor
        // <BodyStyle>
        //     <BoxStyle>
        //         <ContentStyle>
        //             <form onSubmit={onSubmit}>
        //                 <TitleIn placeholder={"  제목"} {...title} />
        //                 <Editor getFormData={setPostData} user={"test"} />
        //                 <SubmitIn>완료</SubmitIn>
        //             </form>
        //         </ContentStyle>
        //     </BoxStyle>
        // </BodyStyle>

        //toast ui editor
        <form onSubmit={onSubmit}>
            <TitleIn placeholder={"  제목"} {...title} />
            <Editor
                initialValue=""
                previewStyle="vertical"
                height="600px"
                initialEditType="wysiwyg"
                ref={editorRef}
            />
            <SubmitIn>완료</SubmitIn>
        </form>
    );
}

export default AddPresenter;
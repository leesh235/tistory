import styled from 'styled-components';

import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

const Wrapper = styled.article`
    width: "100%";
    height: auto;
`;

interface Props {
    editorRef: any,
    height?: string,
}

export const ToastEditor = ({editorRef, height}: Props) => {
    return(
        <Wrapper>
            <Editor
                previewStyle="vertical"
                height={height}
                initialEditType="wysiwyg"
                ref={editorRef}
            />
        </Wrapper>
    );
}

ToastEditor.defaultProps = {
    height: "600px",
}
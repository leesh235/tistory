import React from 'react';
import styled from 'styled-components';

import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

const Wrapper = styled.article`
    width: 100%;
`;

interface Props {

}

export const ToastEditor = ({}: Props) => {
    return(
        <Wrapper>
            <Editor
                previewStyle="vertical"
                height="600px"
                initialEditType="wysiwyg"
            />
        </Wrapper>
    );
}

ToastEditor.defaultProps = {

}
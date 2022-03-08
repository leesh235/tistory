import styled from 'styled-components';

import '@toast-ui/editor/dist/toastui-editor.css';
import { Viewer } from '@toast-ui/react-editor';

const Wrapper = styled.article`
    width: 100%;
    height: auto;
`;

interface Props {
    contents: any,
    height?: string,
}

export const ToastViewer = ({contents, height}: Props) => {
    return(
        <Wrapper>
            <Viewer 
                initialValue={contents}
            />
        </Wrapper>
    );
}

ToastViewer.defaultProps = {
    height: "600px",
}
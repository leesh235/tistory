import styled from 'styled-components';

const Wrapper = styled.article`
    display: flex;
    flex-direction: column;
    width: 95%;
    height: auto;
    min-height: 400px;
    >:nth-child(n){
        margin-bottom: 50px;
    }
`;

interface Props {
    contentsUrl?: string,
}

export const Viewer = ({ contentsUrl }: Props) => {

    const createMarkup = () => {
        return {__html: `<iframe src=${contentsUrl} width="100%" height="100%"></iframe>`}
    }

    return(
        <Wrapper>
            <div dangerouslySetInnerHTML={createMarkup()} />
        </Wrapper>
    );
}
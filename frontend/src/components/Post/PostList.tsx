import styled from 'styled-components';
import { Contents } from '../Contents';
import { Text } from '../Text';

const Wrapper = styled.section`
    width: 100%;
    padding: 2em;
    min-height: 500px;
`;

interface Post{
    postId?: number,
    title?: string,
    createdAt?: string,
    writer?: string,
}

interface Props extends Post{
    postList: Array<Post>,
}

export const PostList = ({ postList }: Props) => {
    return(
        <Wrapper>
            {postList?.length !== 0 ? 
                postList?.map((post , index) => {
                    return <Contents
                    key={index}
                    postId={post.postId}
                    title={post.title}
                    createdAt={post.createdAt}
                    writer={post.writer}
                    />
                })
                : 
                <Text text={"게시글이 없습니다"}/>
            }
        </Wrapper>
    );
}
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
    createAt?: string,
    author?: string,
    hits?: number,
    thumbnail?: string,
}

interface Props extends Post{
    postList: Array<Post>,
    postsQuantity: number
}

export const PostList = ({ postList, postsQuantity = 0 }: Props) => {
    return(
        <Wrapper>
            {postsQuantity !== 0 ? 
                postList?.map((post) => {
                    return <Contents
                        key={post.postId}
                        postId={post.postId}
                        title={post.title}
                        createAt={post.createAt}
                        author={post.author}
                        hits={post.hits}
                        thumbnail={post.thumbnail}
                    />
                })
                : 
                <Text text={"게시글이 없습니다"}/>
            }
        </Wrapper>
    );
}
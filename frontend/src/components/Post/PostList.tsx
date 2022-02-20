import styled from 'styled-components';
import { Contents } from '../Contents';
import { Text } from '../Text';

const Wrapper = styled.section`
    @media screen and (min-width: 64em){
        width: 100%;
    }

    @media screen and (max-width: 63.94em) and (min-width: 22.5em){
        width: 95%;
    }

    @media screen and (max-width: 22.44em){
        width: 98%;
    }
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
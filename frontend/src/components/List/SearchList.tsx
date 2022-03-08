import styled from 'styled-components';
import { Contents } from '../Contents/Contents';
import { Text } from '../common/Text';

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
    searchList: Array<Post>,
    searchQuantity: number
}

export const SearchList = ({ searchList, searchQuantity = 0 }: Props) => {
    return(
        <Wrapper>
            {searchQuantity !== 0 ? 
                searchList?.map((post) => {
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
                <Text text={"검색결과가 없습니다"}/>
            }
        </Wrapper>
    );
}
import styled from 'styled-components';
import {Contents} from '../../components/Contents';
import { Text } from '../../components/common/Text';

const Wrapper = styled.section`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
`;

const ListWrapper = styled.section`
    width: 70%;
    padding: 2em;
    min-height: 500px;
`;

interface Post{
    postId?: number,
    title?: string,
    createAt?: string,
    writer?: string,
}

interface Props extends Post{
    postList: Array<Post>,
}

const HomePresenter = ({ postList }: Props) => {
    return(
        <Wrapper>
            <ListWrapper>
                {postList?.length !== 0 ? 
                    postList?.map((post , index) => {
                        return <Contents
                        key={index}
                        postId={post.postId}
                        title={post.title}
                        createAt={post.createAt}
                        
                        />
                    })
                    : 
                    <Text text={"게시글이 없습니다"}/>
                }
            </ListWrapper>
        </Wrapper>
    );
}

export default HomePresenter;
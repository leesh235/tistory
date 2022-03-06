import styled from "styled-components";
import { Text } from './common/Text';
import { Comment } from "./Comment";

const Wrapper = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 95%;
    height: auto;
`;

interface Comment {
    commentId: number,
    writer: string,
    comment: string,
    createAt: string,
}

interface Porps {
    handleModifyComment: (id: number) => void,
    handleDeleteComment: (id: number) => void,
    commentList?: Array<Comment>
}

export const CommentList = ({ commentList, handleModifyComment, handleDeleteComment }: Porps) => {
    console.log(commentList)
    return(
        <Wrapper>
            {commentList?.length !== 0 ? 
                commentList?.map((val, idx) => {
                    return (
                        <Comment 
                            key={idx} 
                            {...val}
                            handleModifyComment={handleModifyComment}
                            handleDeleteComment={handleDeleteComment}
                        />
                    );
                })
                :
                <Text text={"댓글이 없습니다"}/>
            }
        </Wrapper>
    );
}
import { gql } from "@apollo/client";

export const COMMENT = gql`
    query getCommentList($postId: Int!){
        getCommentList(postId: $postId){
            ... on CommentListSuccess{
                status
                message
                data{
                    commentId
                    writer
                    comment
                    createAt
                }
            }
            ... on CommentListFailure{
                status
                message
            }
        }
    }
`;

export const WRITECOMMENT = gql`
    mutation writeComment($postId: Int!, $commentId: Int, $contents: String!){
        writeComment(postId: $postId, commentId: $commentId, contents: $contents){
            ... on WriteCommentSuccess{
                status
                message
                data{
                    id
                    writer
                    createAt
                    contents
                }
            }
            ... on WriteCommentFailure{
                status
                message
            }
        }
    }
`;

export const MODIFYCOMMENT = gql`
    mutation modifyComment($commentId: Int!, $contents: String!){
        modifyComment(commentId: $commentId, contents: $contents){
            ... on ModifyCommentSuccess{
                status
                message
                data{
                    id
                    writer
                    modifyAt
                    contents
                }
            }
            ... on ModifyCommentFailure{
                status
                message
            }
        }
    }
`;

export const DLETECOMMENT = gql`
    mutation deleteComment($commentId: Int!){
        deleteComment(commentId: $commentId){
            ... on DeleteCommentSuccess{
                status
                message
                data{
                    deleteAt
                }
            }
            ... on DeleteCommentFailure{
                status
                message
            }
        }
    }
`;
import React,{useState} from 'react';
import styled from 'styled-components';
import Pages from "../Pages/Pages"
import Contents from '../../components/Contents';

const BodyStyle = styled.main`
    width: auto;
    height: auto;
    margin: 30px 100px 50px 100px;
`;

const SearchList = ({result}) => {
    
    // const movies = props.movies
    // const [pageId, setPageId] = useState(1);
    // const pageNum = movies.length
    // const len = Math.ceil(pageNum/8)
    // const start = pageId * 8 - 7
    // const end = pageId * 8

    // console.log("result")
    return(//현재
        <BodyStyle>
            {(
                result.map((post, ind) => {
                    // let cnt = ind + 1
                    // if((start <= cnt) && (end >= cnt))
                    // {
                        return(
                            <Contents 
                                key={ind}
                                postId={post.postId}
                                title={post.title}
                                createdAt={post.createdAt}
                                id={post.id}
                            />
                        // );
                    //}
                )})
            )}
        {/* <Pages getDate={(index) => {
            setPageId(index)
        }} pageNum={len}/> */}
        </BodyStyle>
    );
}

export default SearchList;
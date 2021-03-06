import { routes } from '../routes';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { Text } from "./common/Text";
import { useQuery } from '@apollo/client';
import { TOKENINFO } from '../apollo/tokenQuery';

const Wrapper = styled.ul`
    display: block;
    position: absolute;
    background-color: white;
    width: auto;
    height: auto;
    transform: translate(-5%, 10%);
    border: 1px solid gray;
`;

const ListWrapper = styled.li`
    margin: 15px 10px;
`;

export const ListBar = () => {

    const { data } = useQuery(TOKENINFO);

    return (
        <Wrapper>

            <ListWrapper>
                <Link to={{pathname: `${routes.profile}`}} >
                    <Text text={"유저정보"} fs={"1.4rem"}/>
                </Link>
            </ListWrapper>

            {
                data.role === "ADMIN" ? 
                <>
                    <ListWrapper>
                        <Link to={{pathname: `${routes.writeCategory}`}} >
                            <Text text={"카테고리"} fs={"1.4rem"}/>
                        </Link>
                    </ListWrapper>

                    
                    <ListWrapper>    
                        <Link to={{pathname: `${routes.writePost}`}} >
                            <Text text={"포스트"} fs={"1.4rem"}/>
                        </Link>
                    </ListWrapper>

                    
                    <ListWrapper>
                        <Link to={{pathname: `${routes.writeNotice}`}} >
                            <Text text={"공지사항"} fs={"1.4rem"}/>
                        </Link>
                    </ListWrapper>
                </> 
                : 
                ""
            }

        </Wrapper>
    );
}
import styled from "styled-components";
import { Text } from "../components/common/Text";

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

const Page404 = () => {
    return(
        <Wrapper>
            <Text type={"p"} text={"404"} fc={"red"} fs={"2rem"}/>
            <Text type={"p"} text={"page error"} fc={"red"} fs={"1.5rem"}/>
        </Wrapper>
    );
}

export default Page404;
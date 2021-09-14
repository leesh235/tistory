import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GStyle = createGlobalStyle`
    ${reset};
    body{
        margin: 0;
        padding: 0;
    }
    button{
        cursor: pointer;
        outline: none;
    }
    input{
        outline: none;
    }
    a{
        text-decoration: none;
        color: inherit;
    }
`;

export const GlobalStyle = ({children}) => {
    return(
        <GStyle>{children}</GStyle>
    );
}
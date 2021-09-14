import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
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
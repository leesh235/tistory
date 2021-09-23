import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    ${reset};
    html{
        font-size: 62.5%;
    }
    body{
        font-size: 1.6em;
        margin: 0;
        padding: 0;
        width: 100%;
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
    nav{
        list-style:none;
        padding-left:0px;
    }
    h1{
        font-size: 30px;
        font-weight: bold;
    }
    h2{
        font-size: 24px;
        font-weight: bold;
    }
    h3{
        font-size: 18px;
        font-weight: bold;
    }
`;
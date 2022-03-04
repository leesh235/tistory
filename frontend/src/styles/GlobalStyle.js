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
        font-family: "EliceDigitalBaeum_Regular";
    }
    textarea{
        outline: none;
        resize: none;
        font-family: "EliceDigitalBaeum_Regular";
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
        font-family: "EliceDigitalBaeum_Bold";
    }
    h2{
        font-size: 24px;
        font-weight: bold;
        font-family: "EliceDigitalBaeum_Bold";
    }
    h3{
        font-size: 18px;
        font-weight: bold;
        font-family: "EliceDigitalBaeum_Bold";
    }
    div, p, span{
        font-size: 1.3rem;
        font-family: "EliceDigitalBaeum_Regular";
    }

    @font-face {
        font-family: 'EliceDigitalBaeum_Regular';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/EliceDigitalBaeum_Regular.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'EliceDigitalBaeum_Bold';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/EliceDigitalBaeum_Bold.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
`;
import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
    html,
    body {
        padding: 0;
        margin: 0;
        scroll-behavior: smooth;
        background-color: #fff;
        font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    }
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        padding-inline-start: 0;
        padding-inline-end: 0;
        margin-block-start: 0;
        margin-block-end: 0;
    }
    p{
        font-weight: 600;
    }
    .main-container{
        max-width:428px;
        margin:0 auto;
    }
        `;
export default GlobalStyle;

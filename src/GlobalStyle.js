import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500&display=swap');
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-family: 'Roboto', sans-serif;
    }

    body{
        background: linear-gradient(120deg, rgba(0, 0, 0, 0.847), #2e2929ba);

    }
`;

export default GlobalStyle;
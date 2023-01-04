import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

body {
    box-sizing: border-box;
    font-family: 'Julee', cursive;
    margin: 0;
    height: 100%;
    background-color: #dbdbdb;
    width: 100%;
    overflow-x: hidden;
}

h1, h2, h3 {
    font-family: 'Julee', cursive;
}

a {
    text-decoration: none;
}
`;
